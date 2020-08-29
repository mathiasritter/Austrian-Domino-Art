import { NextApiRequest, NextApiResponse } from "next";
import { projectCount } from "../../../assets/projects";

export default (req: NextApiRequest, res: NextApiResponse) => {
    const count = projectCount();

    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;
    res.end(JSON.stringify({ count }));
};
