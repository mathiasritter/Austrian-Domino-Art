import { IndexedProject } from "../../../components/project/ProjectModel";
import { sanityClient, urlFor } from "../../../lib/sanity";
import groq from "groq";
import { getPlaiceholder } from "plaiceholder";
import { NextApiRequest, NextApiResponse } from "next";

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

    const thumbnail = urlFor(projectResponse.thumbnail).url();
    const { base64 } = await getPlaiceholder(thumbnail);
    const project = {
        ...projectResponse,
        thumbnailPreview: base64,
        thumbnail,
    };

    return {
        index,
        ...project,
    };
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { index } = req.query;

    if (Array.isArray(index) || !Number.isInteger(Number(index))) {
        throw new Error("Must provide index query parameter as integer");
    }

    const project = await getProjectByIndex(parseInt(index));
    res.json(project);
};
