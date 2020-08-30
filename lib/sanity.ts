import React from "react";
import sanity from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const sanityClient = sanity({
    // Find your project ID and dataset in `sanity.json` in your studio project
    projectId: "5su6wo00",
    dataset: "production",
    useCdn: true,
    // useCdn == true gives fast, cheap responses using a globally distributed cache.
    // Set this to false if your application require the freshest possible
    // data always (potentially slightly slower and a bit more expensive).
});

const builder = imageUrlBuilder(sanityClient);

const urlFor = (source: SanityImageSource) => {
    return builder.image(source);
};

export { sanityClient, urlFor };
