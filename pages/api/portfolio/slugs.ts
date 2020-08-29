import { NextApiRequest, NextApiResponse } from "next";
import { projectSlugs } from "../../../assets/projects";

export default (req: NextApiRequest, res: NextApiResponse) => {
    const slugs = projectSlugs();

    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;
    res.end(JSON.stringify(slugs));
};
