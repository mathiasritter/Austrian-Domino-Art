import { getPlaiceholder } from "plaiceholder";
import { ImageProps } from "./types";

const getImageProps = async (src: string, alt: string): Promise<ImageProps> => {
    const backgroundImageSrc =
        "https://res.cloudinary.com/austriandominoart/image/upload/general/AustrianDominoArt-BG.jpg";
    const { base64 } = await getPlaiceholder(backgroundImageSrc);

    return {
        src,
        alt,
        blurDataURL: base64,
    };
};

export { getImageProps };
