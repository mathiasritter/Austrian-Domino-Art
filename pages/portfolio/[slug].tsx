import React, { useEffect, useState } from "react";
import { PortfolioNavBar } from "../../components/header/PortfolioNavBar";
import {
    GetStaticPaths,
    GetStaticProps,
    GetStaticPropsContext,
    NextPage,
} from "next";
import {
    initializeStore,
    InitialReduxStateProps,
    RootState,
} from "../../store";
import {
    fetchProjectImages,
    setProjects,
} from "../../components/portfolio/portfolioSlice";
import getBaseUrl from "../../lib/base-url";
import { SeoHead } from "../../components/head/SeoHead";
import { GreySection } from "../index";
import { useDispatch, useSelector } from "react-redux";
import { projectBySlug, projectSlugs } from "../../assets/projects";
import { Theme } from "../../theme/theme";
import { ProjectDescription } from "../../components/project/ProjectDescription";
import { ProjectVideos } from "../../components/project/ProjectVideos";
import { createDiv } from "../../components/common/createDiv";
import { Typography } from "@material-ui/core";
import { ProjectImageList } from "../../components/project/ProjectImageList";
import { ProjectTitle } from "../../components/project/ProjectTitle";

interface Props {
    slug: string;
}

const Portfolio: NextPage<Props, Props & InitialReduxStateProps> = ({
    slug,
}: Props) => {
    const dispatch = useDispatch();
    const {
        title,
        summary,
        thumbnail,
        images,
        videos,
        description,
        categories,
    } = useSelector((state: RootState) => state.portfolio.projects[slug]);

    useEffect(() => {
        if (!images) {
            const baseUrl = getBaseUrl();
            dispatch(
                fetchProjectImages({
                    baseUrl,
                    slug,
                })
            );
        }
    }, [images, slug]);

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

const getStaticProps: GetStaticProps<Props & InitialReduxStateProps> = async ({
    params,
}: GetStaticPropsContext) => {
    const slug = params.slug as string;
    const store = initializeStore();

    const project = projectBySlug(slug);
    store.dispatch(setProjects([project]));

    return {
        props: {
            slug,
            initialReduxState: store.getState(),
        },
    };
};

const getStaticPaths: GetStaticPaths = async () => {
    const slugs = projectSlugs();

    const paths = slugs.map((slug: string) => ({
        params: { slug },
    }));

    return {
        paths,
        fallback: false,
    };
};

export default Portfolio;
export { getStaticPaths, getStaticProps };
