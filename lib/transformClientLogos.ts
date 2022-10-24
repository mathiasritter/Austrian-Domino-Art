import { ImageProps } from "./types";
import { getImageProps } from "./images";
import { clientLogos } from "../components/clients/clientLogos";

interface ClientLogo {
    slug: string;
    image: ImageProps;
}

const getClientLogos = async (): Promise<ClientLogo[]> =>
    Promise.all(
        clientLogos.map(async ({ slug, image, alt }) => {
            const imageProps = await getImageProps(image, alt);
            return {
                slug,
                image: imageProps,
            };
        })
    );

export { getClientLogos };
export type { ClientLogo };
