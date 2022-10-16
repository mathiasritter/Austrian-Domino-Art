import React from "react";
import Image from "next/image";

const Background = () => (
    <Image
        alt="red and white dominoes showing the Austrian Domino Art logo"
        src="https://res.cloudinary.com/austriandominoart/image/upload/c_scale,dpr_auto,f_auto,q_auto:eco,w_1800/general/AustrianDominoArt-BG.jpg"
        layout="fill"
        objectFit="cover"
    />
);

export { Background };
