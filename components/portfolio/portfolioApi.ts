import { IndexedProject } from "../project/ProjectModel";
import { sanityClient } from "../../lib/sanity";
import groq from "groq";

const getProjectByIndex = async (index: number): Promise<IndexedProject> => {
    const projectResponse = await sanityClient.fetch(
        groq`
        *[_type == "portfolio"][0] {
          "project": projects[$index]-> {
            title,
            "slug": slug.current,
            summary,
            thumbnail
          }
        }
    `,
        { index }
    );
    const project = projectResponse.project;

    return {
        index,
        ...project,
    };
};

export { getProjectByIndex };
