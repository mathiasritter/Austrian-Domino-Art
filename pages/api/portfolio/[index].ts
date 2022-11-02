import { IndexedProject } from "../../../components/project/ProjectModel";
import { sanityClient, urlFor } from "../../../lib/sanity";
import groq from "groq";
import { NextApiRequest, NextApiResponse } from "next";
import { getImageProps } from "../../../lib/images";

const getProjectByIndex = async (index: number): Promise<IndexedProject> => {
    const { project: projectResponse } = await sanityClient.fetch(
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

    const thumbnail = await getImageProps(
        urlFor(projectResponse.thumbnail).url(),
        `Thumbnail for ${projectResponse.title}`
    );
    const project = {
        ...projectResponse,
        thumbnail,
    };

    return {
        index,
        ...project,
    };
};

const requestHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { index } = req.query;

    if (Array.isArray(index) || !Number.isInteger(Number(index))) {
        throw new Error("Must provide index query parameter as integer");
    }

    const project = await getProjectByIndex(parseInt(index));
    res.json(project);
};

export default requestHandler;
