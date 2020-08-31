import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export enum ProjectCategory {
    ADVERTISEMENT = "Advertisement",
    WORKSHOP = "Workshop",
    ENTERTAINMENT = "Entertainment",
}

interface BaseProject {
    slug: string;
    title: string;
    summary: string;
    categories: ProjectCategory[];
    videos: string[];
}

export interface BackendProject extends BaseProject {
    description: JSX.Element;
}

export interface Project extends BaseProject {
    number: number;
    thumbnail: string;
    description: string;
    images?: string[];
}

export interface SanityBaseProject {
    title: string;
    slug: string;
    summary: string;
    thumbnail: string;
}

export interface IndexedProject extends SanityBaseProject {
    index: number;
}

export interface SanityFullProject extends SanityBaseProject {
    categories: string[];
    description: string;
    images: string[];
    videos: string[];
}

export interface ProjectImages {
    slug: string;
    images: string[];
}
