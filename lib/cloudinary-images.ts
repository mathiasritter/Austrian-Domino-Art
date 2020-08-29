/* eslint-disable @typescript-eslint/no-var-requires */

const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: "austriandominoart",
    api_key: "382544451985697",
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const projectImages = async (slug: string): Promise<string[]> => {
    return new Promise<string[]>((resolve, reject) => {
        cloudinary.api.resources(
            { type: "upload", max_results: 500, prefix: `projects/${slug}` },
            (error, result) => {
                if (error) {
                    console.error(error);
                    reject(error);
                }
                const images: string[] = [];
                for (const resource of result.resources) {
                    images.push(resource.secure_url);
                }
                resolve(images);
            }
        );
    });
};
