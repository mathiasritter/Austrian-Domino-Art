export enum ProjectCategory {
    ADVERTISEMENT = "Advertisement",
    WORKSHOP = "Workshop",
    ENTERTAINMENT = "Entertainment",
}

export interface BaseProject {
    title: string;
    slug: string;
    summary: string;
    thumbnail: string;
}

export interface IndexedProject extends BaseProject {
    index: number;
}

export interface FullProject extends BaseProject {
    categories: string[];
    description: string;
    images: string[];
    videos?: string[];
}
