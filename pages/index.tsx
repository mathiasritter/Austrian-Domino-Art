import React from "react";
import About from "../components/about/About";
import Clients from "../components/clients/Clients";
import Contact from "../components/contact/Contact";
import { Home } from "../components/home/Home";
import Portfolio from "../components/portfolio/Portfolio";
import Services from "../components/services/Services";
import { Container, createStyles, withStyles } from "@material-ui/core";
import { HomeNavBar } from "../components/header/HomeNavBar";
import { SeoHead } from "../components/head/SeoHead";
import { GetStaticProps, NextPage } from "next";
import { initializeStore, InitialReduxStateProps } from "../store";
import { setProjects, setTotal } from "../components/portfolio/portfolioSlice";
import { Theme } from "../theme/theme";
import { PropsWithStylesAndChildren } from "../theme/styleTypes";
import { sanityClient } from "../lib/sanity";
import groq from "groq";

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
        <GreySection id="portfolio">
            <Portfolio />
        </GreySection>
        <WhiteSection id="services">
            <Services />
        </WhiteSection>
        <GreySection id="about">
            <About />
        </GreySection>
        <WhiteSection id="clients">
            <Clients />
        </WhiteSection>
        <GreySection id="contact">
            <Contact />
        </GreySection>
    </>
);

const Section: React.FC<PropsWithStylesAndChildren<{ id?: string }>> = (
    props: PropsWithStylesAndChildren<{ id?: string }>
) => (
    <section id={props.id} className={props.classes.root}>
        <Container maxWidth="xl">{props.children}</Container>
    </section>
);

const makeSectionStyles = (background: "default" | "paper") => (theme: Theme) =>
    createStyles({
        root: {
            background: theme.palette.background[background],
            [theme.breakpoints.up("md")]: {
                paddingTop: theme.spacing(11),
                paddingBottom: theme.spacing(11),
            },
            [theme.breakpoints.only("sm")]: {
                paddingTop: theme.spacing(9.5),
                paddingBottom: theme.spacing(9.5),
            },
            [theme.breakpoints.down("xs")]: {
                paddingTop: theme.spacing(8.5),
                paddingBottom: theme.spacing(8.5),
            },
        },
    });

const whiteSectionStyles = makeSectionStyles("paper");
const greySectionStyles = makeSectionStyles("default");

const WhiteSection = withStyles(whiteSectionStyles)(Section);
const GreySection = withStyles(greySectionStyles)(Section);

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
          "projects": projects[0..8]-> {
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
export { GreySection, getStaticProps };
