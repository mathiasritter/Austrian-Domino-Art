import { NextApiRequest, NextApiResponse } from "next";
import { projectByNumber } from "../../../../assets/projects";

export default (req: NextApiRequest, res: NextApiResponse) => {
    const projectNumber = parseInt(req.query.number as string, 10);
    const project = projectByNumber(projectNumber);

    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;
    res.end(JSON.stringify(project));
};
