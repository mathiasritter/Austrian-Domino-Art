import React from "react";
import Image from "next/image";
import { ImageProps } from "../../lib/types";

const Background: React.FC<ImageProps> = (props) => (
    <Image {...props} layout="fill" objectFit="cover" placeholder="blur" />
);

export { Background };
