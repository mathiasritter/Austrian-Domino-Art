import React from "react";
import Image from "next/future/image";
import { ImageProps } from "../../lib/types";

const Background: React.FC<ImageProps> = (props) => (
    <Image
        {...props}
        sizes="100vw"
        placeholder="blur"
        style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
        }}
    />
);

export { Background };
