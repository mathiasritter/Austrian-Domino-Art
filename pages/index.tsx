import React, { PropsWithChildren } from "react";
import About from "../components/about/About";
import Clients from "../components/clients/Clients";
import Contact from "../components/contact/Contact";
import { Home } from "../components/home/Home";
import Portfolio from "../components/portfolio/Portfolio";
import Services from "../components/services/Services";
import Container from "@mui/material/Container";
import { HomeNavBar } from "../components/header/HomeNavBar";
import { SeoHead } from "../components/head/SeoHead";
import { GetStaticProps, NextPage } from "next";
import Box from "@mui/material/Box";
import { ImageProps, PortfolioProject } from "../lib/types";
import { getImageProps } from "../lib/images";
import { ClientLogo, getClientLogos } from "../lib/transformClientLogos";
import { fetchPortfolioProjects, fetchProjectCount } from "../lib/portfolio";

interface PageProps {
    projectCount: number;
    initialProjects: PortfolioProject[];
    backgroundImage: ImageProps;
    aboutImages: {
        card1Image: ImageProps;
        card2Image: ImageProps;
        card3Image: ImageProps;
    };
    clientLogos: ClientLogo[];
    contactImage: ImageProps;
}

const Index: NextPage<PageProps> = ({
    projectCount,
    initialProjects,
    backgroundImage,
    aboutImages,
    clientLogos,
    contactImage,
}) => (
    <>
        <SeoHead
            title="Austrian Domino Art - Professional Domino Toppling"
            description="Realising Domino Shows, Events, Advertisements, Workshops and more. Contact us today to start your Individual Domino Art Project!"
            url="https://www.domino.art"
            image="https://res.cloudinary.com/austriandominoart/image/upload/c_scale,dpr_auto,f_auto,q_auto:eco,w_576/general/AustrianDominoArt-BG.jpg"
        />
        <HomeNavBar />
        <section id="home">
            <Home {...backgroundImage} />
        </section>
        <Section background="default" id="portfolio">
            <Portfolio
                projectCount={projectCount}
                initialProjects={initialProjects}
            />
        </Section>
        <Section background="paper" id="services">
            <Services />
        </Section>
        <Section background="default" id="about">
            <About {...aboutImages} />
        </Section>
        <Section background="paper" id="clients">
            <Clients logos={clientLogos} />
        </Section>
        <Section background="default" id="contact">
            <Contact {...contactImage} />
        </Section>
    </>
);

interface SectionProps {
    id?: string;
    background: "default" | "paper";
}

const Section: React.FC<PropsWithChildren<SectionProps>> = ({
    id,
    background,
    children,
}) => (
    <Box
        component="section"
        id={id}
        sx={{
            bgcolor: `background.${background}`,
            paddingTop: {
                xs: 8.5,
                sm: 9.5,
                md: 11,
            },
            paddingBottom: {
                xs: 8.5,
                sm: 9.5,
                md: 11,
            },
        }}
    >
        <Container maxWidth="xl">{children}</Container>
    </Box>
);

const getStaticProps: GetStaticProps<PageProps> = async () => {
    const projectCount = await fetchProjectCount();

    const initialProjects = await fetchPortfolioProjects(0, 7);

    const backgroundImage = await getImageProps(
        "https://res.cloudinary.com/austriandominoart/image/upload/general/AustrianDominoArt-BG.jpg",
        "red and white dominoes showing the Austrian Domino Art logo"
    );
    const card1Image = await getImageProps(
        "https://res.cloudinary.com/austriandominoart/image/upload/general/Dominoes-Structures.jpg",
        "Various domino structures on a table"
    );
    const card2Image = await getImageProps(
        "https://res.cloudinary.com/austriandominoart/image/upload/general/Dominoes-Pile.jpg",
        "A pile of white and golden dominoes"
    );
    const card3Image = await getImageProps(
        "https://res.cloudinary.com/austriandominoart/image/upload/general/Dominoes-Dog.jpg",
        "A dog who watches dominoes toppling"
    );

    const clientLogos = await getClientLogos();

    const contactImage = await getImageProps(
        "https://res.cloudinary.com/austriandominoart/image/upload/general/Dominoes-Walls.jpg",
        "Multiple colourful domino walls on a prop"
    );

    return {
        props: {
            projectCount,
            initialProjects,
            backgroundImage,
            aboutImages: {
                card1Image,
                card2Image,
                card3Image,
            },
            clientLogos,
            contactImage,
        },
        revalidate: 5 * 60,
    };
};

export default Index;
export { getStaticProps, Section };
