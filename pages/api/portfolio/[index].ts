import { NextApiRequest, NextApiResponse } from "next";
import { fetchPortfolioProjectByIndex } from "../../../lib/portfolio";

const requestHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { index } = req.query;

    if (Array.isArray(index) || !Number.isInteger(Number(index))) {
        throw new Error("Must provide index query parameter as integer");
    }

    const project = await fetchPortfolioProjectByIndex(parseInt(index));
    res.json(project);
};

export default requestHandler;
