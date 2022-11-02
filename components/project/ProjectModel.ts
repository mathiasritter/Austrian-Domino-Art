import { ImageProps } from "../../lib/types";

export enum ProjectCategory {
    ADVERTISEMENT = "Advertisement",
    WORKSHOP = "Workshop",
    ENTERTAINMENT = "Entertainment",
}

export interface BaseProject {
    title: string;
    slug: string;
    summary: string;
    thumbnail: ImageProps;
}

export interface IndexedProject extends BaseProject {
    index: number;
}

export interface FullProject extends BaseProject {
    categories: string[];
    description: string;
    images: ImageProps[];
    videos?: string[];
}
