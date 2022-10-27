import React from "react";
import { PortfolioNavBar } from "../../components/header/PortfolioNavBar";
import {
    GetStaticPaths,
    GetStaticProps,
    GetStaticPropsContext,
    NextPage,
} from "next";
import { SeoHead } from "../../components/head/SeoHead";
import { Section } from "../index";
import { ProjectDescription } from "../../components/project/ProjectDescription";
import { ProjectVideos } from "../../components/project/ProjectVideos";
import { ProjectImageList } from "../../components/project/ProjectImageList";
import { ProjectTitle } from "../../components/project/ProjectTitle";
import groq from "groq";
import { sanityClient, urlFor } from "../../lib/sanity";
import { FullProject } from "../../components/project/ProjectModel";
import NotFound from "../404";
import { styled } from "@mui/system";
import { initializeStore } from "../../store";
import { getImageProps } from "../../lib/images";

interface Props {
    project: FullProject;
}

const Portfolio: NextPage<Props, Props> = ({ project }: Props) => {
    if (!project.slug) {
        return <NotFound />;
    }

    const {
        title,
        slug,
        summary,
        thumbnail,
        images,
        videos = [],
        description,
        categories,
    } = project;

    return (
        <>
            <SeoHead
                title={`Austrian Domino Art - ${title}`}
                description={summary}
                url={`https://www.domino.art/portfolio/${slug}`}
                image={thumbnail.src}
            />
            <PortfolioNavBar />
            <Section background="paper">
                <ProjectGrid>
                    <ProjectTitle>{title}</ProjectTitle>
                    <ProjectVideos videos={videos} title={title} />
                    <ProjectDescription
                        categories={categories}
                        description={description}
                    />
                    <ProjectImageList images={images} title={title} />
                </ProjectGrid>
            </Section>
        </>
    );
};

const ProjectGrid = styled("div")(({ theme }) => ({
    display: "grid",
    gridGap: theme.spacing(2),
    gridTemplateColumns: "1fr",
}));

const getStaticProps: GetStaticProps<Props> = async ({
    params,
}: GetStaticPropsContext) => {
    const slug = params.slug as string;

    const project = await sanityClient.fetch(
        groq`
            *[_type == "project" && slug.current == $slug][0] {
                title,
                "slug": slug.current,
                summary,
                "categories": categories[]->name,
                thumbnail,
                description,
                images,
                videos,
            }
        `,
        { slug }
    );

    if (!project.slug) {
        return { notFound: true };
    }

    project.thumbnail = await getImageProps(
        urlFor(project.thumbnail).url(),
        `Thumbnail for ${project.title}`
    );
    project.images = await Promise.all(
        project.images.map(
            async (image, index) =>
                await getImageProps(
                    urlFor(image).url(),
                    `Image ${index + 1} of project ${project.title}`
                )
        )
    );

    const store = initializeStore();

    return {
        props: {
            initialReduxState: store.getState(),
            project,
        },
        revalidate: 10,
    };
};

const getStaticPaths: GetStaticPaths = async () => {
    const projects = await sanityClient.fetch(
        groq`*[_type == "project"]{ "slug": slug.current }`
    );
    const slugs = projects.map((project) => project.slug);

    const paths = slugs.map((slug: string) => ({
        params: { slug },
    }));

    return {
        paths,
        fallback: "blocking",
    };
};

export default Portfolio;
export { getStaticPaths, getStaticProps };
