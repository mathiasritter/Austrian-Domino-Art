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
import NotFound from "../404";
import { styled } from "@mui/system";
import { fetchProjectBySlug, fetchProjectSlugs } from "../../lib/portfolio";
import { FullProject } from "../../lib/types";

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
            <Section background="default">
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

    try {
        const project = await fetchProjectBySlug(slug);

        return {
            props: {
                project,
            },
            revalidate: 60 * 60,
        };
    } catch (err) {
        return { notFound: true };
    }
};

const getStaticPaths: GetStaticPaths = async () => {
    const slugs = await fetchProjectSlugs();

    const paths = slugs.map((slug) => ({
        params: { slug },
    }));

    return {
        paths,
        fallback: "blocking",
    };
};

export default Portfolio;
export { getStaticPaths, getStaticProps };
