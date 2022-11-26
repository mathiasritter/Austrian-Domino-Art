import { sanityClient, urlFor } from "./sanity";
import groq from "groq";
import { getImageProps } from "./images";
import {
    FullProject,
    PortfolioProject,
    SanityFullProject,
    SanityPortfolioProject,
} from "./types";

const resolveProjectThumbnail = async ({
    thumbnail: thumbnailUrl,
    ...restProject
}: SanityPortfolioProject): Promise<PortfolioProject> => {
    const thumbnail = await getImageProps(
        thumbnailUrl,
        `Thumbnail for ${restProject.title}`
    );
    return {
        ...restProject,
        thumbnail,
    };
};

const resolveProjectImages = async ({
    images: imageUrls,
    ...restProject
}: SanityFullProject): Promise<FullProject> => {
    const images = await Promise.all(
        imageUrls.map(
            async (image, index) =>
                await getImageProps(
                    urlFor(image).url(),
                    `Image ${index + 1} of project ${restProject.title}`
                )
        )
    );

    return {
        ...restProject,
        images,
    };
};

const fetchProjectBySlug = async (slug: string): Promise<FullProject> => {
    const project = await sanityClient.fetch<SanityFullProject | null>(
        groq`
            *[_type == "project" && slug.current == $slug][0] {
                title,
                "slug": slug.current,
                summary,
                "categories": categories[]->name,
                "thumbnail": thumbnail.asset->url,
                description,
                "images": images[].asset->url,
                videos,
            }
        `,
        { slug }
    );

    if (project === null) {
        throw new Error(`Project ${slug} not found!`);
    }

    return resolveProjectImages(project);
};

const fetchPortfolioProjects = async (fromIndex: number, toIndex: number) => {
    const { projects: sanityProjects } = await sanityClient.fetch<{
        projects: SanityPortfolioProject[];
    }>(
        groq`
            *[_type == "portfolio"][0] {
                projects[$fromIndex..$toIndex] -> {
                    title,
                    "slug": slug.current,
                    summary,
                    "thumbnail": thumbnail.asset->url
                }
            }
        `,
        { fromIndex, toIndex }
    );

    return Promise.all(
        sanityProjects.map((project) => resolveProjectThumbnail(project))
    );
};

const fetchPortfolioProjectByIndex = async (
    index: number
): Promise<PortfolioProject> => {
    const { project: sanityProject } = await sanityClient.fetch<{
        project: SanityPortfolioProject;
    }>(
        groq`
            *[_type == "portfolio"][0] {
                "project": projects[$index] -> {
                    title,
                    "slug": slug.current,
                    summary,
                    "thumbnail": thumbnail.asset->url
                }
            }
        `,
        { index }
    );

    return resolveProjectThumbnail(sanityProject);
};

const fetchProjectCount = async (): Promise<number> => {
    const result = await sanityClient.fetch<{ total: number }>(groq`
        *[_type == "portfolio"][0] {
          "total": count(projects[])
        }
    `);
    return result.total;
};

const fetchProjectSlugs = async (): Promise<string[]> => {
    const projects = await sanityClient.fetch<{ slug: string }[]>(
        groq`*[_type == "project"]{ "slug": slug.current }`
    );

    return projects.map(({ slug }) => slug);
};

export {
    fetchPortfolioProjects,
    fetchPortfolioProjectByIndex,
    fetchProjectCount,
    fetchProjectBySlug,
    fetchProjectSlugs,
};
