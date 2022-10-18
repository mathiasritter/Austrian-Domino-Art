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
import { initializeStore, InitialReduxStateProps } from "../store";
import { setProjects, setTotal } from "../components/portfolio/portfolioSlice";
import { sanityClient, urlFor } from "../lib/sanity";
import groq from "groq";
import Box from "@mui/material/Box";
import { getPlaiceholder } from "plaiceholder";
import { ImageProps } from "../lib/types";
import { getImageProps } from "../lib/images";

interface PageProps {
    backgroundImage: ImageProps;
    aboutImages: {
        card1Image: ImageProps;
        card2Image: ImageProps;
        card3Image: ImageProps;
    };
}

const Index: NextPage<PageProps> = ({ backgroundImage, aboutImages }) => (
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
            <Portfolio />
        </Section>
        <Section background="paper" id="services">
            <Services />
        </Section>
        <Section background="default" id="about">
            <About {...aboutImages} />
        </Section>

        <Section background="paper" id="clients">
            <Clients />
        </Section>
        <Section background="default" id="contact">
            <Contact />
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

const getStaticProps: GetStaticProps<
    InitialReduxStateProps & PageProps
> = async () => {
    const store = initializeStore();

    const totalResult = await sanityClient.fetch(groq`
        *[_type == "portfolio"][0] {
          "total": count(projects[])
        }
    `);
    const total = totalResult.total;
    store.dispatch(setTotal(total));

    const projectsResult = await sanityClient.fetch(groq`
        *[_type == "portfolio"][0] {
          "projects": projects[0..7]-> {
            title,
            "slug": slug.current,
            summary,
            thumbnail
          }
        }
    `);

    const projects = await Promise.all(
        projectsResult.projects.map(async (project) => {
            const thumbnail = urlFor(project.thumbnail).url();
            const { base64 } = await getPlaiceholder(thumbnail);
            return {
                ...project,
                thumbnail,
                thumbnailPreview: base64,
            };
        })
    );

    store.dispatch(setProjects(projects));

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

    return {
        props: {
            initialReduxState: store.getState(),
            backgroundImage,
            aboutImages: {
                card1Image,
                card2Image,
                card3Image,
            },
        },
        revalidate: 10,
    };
};

export default Index;
export { getStaticProps, Section };
