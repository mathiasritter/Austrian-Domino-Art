import { NextApiRequest, NextApiResponse } from "next";
import { projectImages } from "../../../../lib/cloudinary-images";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const slug = req.query.slug as string;
    const images = await projectImages(slug);

    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;
    res.end(JSON.stringify(images));
};
