import React from "react";
import { AboutGrid } from "./AboutGrid";
import { StatisticCard } from "./StatisticCard";
import { LogoCard } from "./LogoCard";
import Typography from "@mui/material/Typography";
import { PictureCard } from "./PictureCard";
import { ImageProps } from "../../lib/types";

interface AboutProps {
    card1Image: ImageProps;
    card2Image: ImageProps;
    card3Image: ImageProps;
}

const About: React.FC<AboutProps> = ({
    card1Image,
    card2Image,
    card3Image,
}) => (
    <>
        <Typography
            variant="h1"
            gutterBottom
            sx={{ color: "primary.main", fontWeight: "bold" }}
        >
            About
        </Typography>
        <AboutGrid>
            <LogoCard gridArea="logo" />
            <StatisticCard
                gridArea="stat1"
                inside="3M +"
                below="Dominoes toppled"
            />
            <StatisticCard
                gridArea="stat2"
                inside="15 +"
                below="Guinness World Records"
            />
            <StatisticCard
                gridArea="stat3"
                inside="40 +"
                below="Artists in Network"
            />
            <PictureCard gridArea="card1" image={card1Image}>
                Founded in 2008, Austrian Domino Art specialises in the
                organisation, design and execution of innovative domino art.
                With its fascinating structures and spectacular effects, domino
                art continues to mesmerize people from all over the globe. Our
                extensive portfolio includes a wide variety of domino shows,
                advertisements and workshops.
            </PictureCard>
            <PictureCard gridArea="card2" image={card2Image}>
                As a full-service provider, we offer tailored domino projects:
                from the initial idea through to the final domino to topple.
                Thanks to our network of over 40 domino artists, we provide
                high-quality services from a single source. In total, Austrian
                Domino Art and partners have set up and toppled more than 3
                million dominoes, including over 15 official Guinness World
                Records.
            </PictureCard>
            <PictureCard gridArea="card3" image={card3Image}>
                Whether it be for entertainment, advertisement, team workshops
                or any other purpose: domino art is the perfect solution when it
                comes to improving team work, conveying messages or simply
                impressing your target audience. If you are interested in a
                solution for your business, contact us today. We greatly look
                forward to working with you!
            </PictureCard>
        </AboutGrid>
    </>
);

export default About;
export type { AboutProps };
