import { NextApiRequest, NextApiResponse } from "next";
import { projectBySlug } from "../../../../assets/projects";

export default (req: NextApiRequest, res: NextApiResponse) => {
    const slug = req.query.slug as string;
    const project = projectBySlug(slug);

    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;
    res.end(JSON.stringify(project));
};
