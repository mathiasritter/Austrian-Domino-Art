import fetch from "isomorphic-unfetch";
import { Project, ProjectImages } from "../project/ProjectModel";

const throwError = (response: Response, message: string) => {
    throw new Error(`${response.status} ${response.statusText} ${message}`);
};

export const getProjectByNumber = async (
    baseUrl: string,
    projectNumber: number
): Promise<Project> => {
    const response = await fetch(
        baseUrl + "/api/portfolio/number/" + projectNumber
    );
    if (!response.ok) {
        throwError(response, `failed to fetch project number ${projectNumber}`);
    }
    const project = await response.json();
    return project;
};

export const getProjectBySlug = async (
    baseUrl: string,
    slug: string
): Promise<Project> => {
    const response = await fetch(baseUrl + "/api/portfolio/slug/" + slug);
    if (!response.ok) {
        throwError(response, `failed to fetch project with slug ${slug}`);
    }
    const project = await response.json();
    return project;
};

export const getProjectImages = async (
    baseUrl: string,
    slug: string
): Promise<ProjectImages> => {
    const response = await fetch(baseUrl + "/api/portfolio/images/" + slug);
    if (!response.ok) {
        throwError(
            response,
            `failed to fetch images for project with slug ${slug}`
        );
    }
    const images = (await response.json()) as string[];
    return {
        slug,
        images,
    };
};

export const getTotal = async (baseUrl: string): Promise<number> => {
    const response = await fetch("/api/portfolio/count");
    if (!response.ok) {
        throwError(response, `failed to fetch project count`);
    }
    const count = (await response.json()).count;
    return count;
};
