import { getPlaiceholder } from "plaiceholder";
import { ImageProps } from "./types";

const getImageProps = async (src: string, alt: string): Promise<ImageProps> => {
    const {
        base64,
        img: { width, height },
    } = await getPlaiceholder(src);

    return {
        src,
        width,
        height,
        alt,
        blurDataURL: base64,
    };
};

export { getImageProps };
