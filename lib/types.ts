import { PortableTextBlock } from "@portabletext/types";

interface ImageProps {
    src: string;
    blurDataURL: string;
    alt: string;
    width: number;
    height: number;
}

interface BaseProject {
    title: string;
    slug: string;
    summary: string;
}

interface ProjectDetails {
    thumbnail: string;
    categories: string[];
    description: PortableTextBlock;
    videos?: string[];
}

interface SanityPortfolioProject extends BaseProject {
    thumbnail: string;
}

interface PortfolioProject extends BaseProject {
    thumbnail: ImageProps;
}

interface SanityFullProject extends BaseProject, ProjectDetails {
    images: string[];
}

interface FullProject extends BaseProject, ProjectDetails {
    images: ImageProps[];
}

export type {
    ImageProps,
    SanityPortfolioProject,
    PortfolioProject,
    SanityFullProject,
    FullProject,
};
