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
import { sanityClient } from "../lib/sanity";
import groq from "groq";
import Box from "@mui/material/Box";

const Index: NextPage = () => (
    <>
        <SeoHead
            title="Austrian Domino Art - Professional Domino Toppling"
            description="Realising Domino Shows, Events, Advertisements, Workshops and more. Contact us today to start your Individual Domino Art Project!"
            url="https://www.domino.art"
            image="https://res.cloudinary.com/austriandominoart/image/upload/c_scale,dpr_auto,f_auto,q_auto:eco,w_576/general/AustrianDominoArt-BG.jpg"
        />
        <HomeNavBar />
        <section id="home">
            <Home />
        </section>
        <Section background="default" id="portfolio">
            <Portfolio />
        </Section>
        {/*

        <Section background="paper" id="services">
            <Services />
        </Section>
        <Section background="default" id="about">
            <About />
        </Section>
        <Section background="paper" id="clients">
            <Clients />
        </Section>
        <Section background="default" id="contact">
            <Contact />
        </Section>
             */}
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
        sx={(theme) => ({
            background: theme.palette.grey["900"],
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
        })}
    >
        <Container maxWidth="xl">{children}</Container>
    </Box>
);

const getStaticProps: GetStaticProps<InitialReduxStateProps> = async () => {
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
    const projects = projectsResult.projects;
    store.dispatch(setProjects(projects));

    return {
        props: {
            initialReduxState: store.getState(),
        },
        revalidate: 10,
    };
};

export default Index;
export { getStaticProps, Section };
