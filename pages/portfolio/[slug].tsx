import React from "react";
import { PortfolioNavBar } from "../../components/header/PortfolioNavBar";
import {
    GetStaticPaths,
    GetStaticProps,
    GetStaticPropsContext,
    NextPage,
} from "next";
import { SeoHead } from "../../components/head/SeoHead";
import { GreySection } from "../index";
import { Theme } from "../../theme/theme";
import { ProjectDescription } from "../../components/project/ProjectDescription";
import { ProjectVideos } from "../../components/project/ProjectVideos";
import { createDiv } from "../../components/common/createDiv";
import { ProjectImageList } from "../../components/project/ProjectImageList";
import { ProjectTitle } from "../../components/project/ProjectTitle";
import groq from "groq";
import { sanityClient, urlFor } from "../../lib/sanity";
import { FullProject } from "../../components/project/ProjectModel";
import NotFound from "../404";

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
                image={thumbnail}
            />
            <PortfolioNavBar />
            <GreySection>
                <ProjectGrid>
                    <ProjectTitle>{title}</ProjectTitle>
                    <ProjectVideos videos={videos} title={title} />
                    <ProjectDescription
                        categories={categories}
                        description={description}
                    />
                    <ProjectImageList images={images} title={title} />
                </ProjectGrid>
            </GreySection>
        </>
    );
};

const ProjectGrid = createDiv((theme: Theme) => ({
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

    project.thumbnail = urlFor(project.thumbnail).url();
    project.images = project.images.map((image) => urlFor(image).url());

    return {
        props: { project },
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
