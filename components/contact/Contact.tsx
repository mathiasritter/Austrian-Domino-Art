import React from "react";
import { Card, CardContent, Link, NoSsr, Typography } from "@material-ui/core";
import { ContactForm } from "./ContactForm";
import { LazyContactImage } from "./LazyContactImage";
import { ContactGrid } from "./ContactGrid";

export const Contact: React.FC = () => (
    <>
        <Typography variant="h1">Contact</Typography>
        <Typography variant="h4" component="div" gutterBottom>
            Do you have a big idea we can help with?
        </Typography>
        <Typography variant="h6" component="div" gutterBottom>
            Use the contact form below
            <NoSsr>
                {" "}
                or email us at{" "}
                <Link href="mailto:mail@domino.art" color="inherit">
                    mail@domino.art
                </Link>
                .
            </NoSsr>
        </Typography>
        <ContactGrid>
            <Card>
                <CardContent>
                    <ContactForm />
                </CardContent>
            </Card>
            <Card>
                <LazyContactImage
                    src="https://res.cloudinary.com/austriandominoart/image/upload/c_scale,dpr_auto,f_auto,q_auto:eco,w_1200/general/Dominoes-Walls.jpg"
                    alt="Colourful domino walls"
                />
            </Card>
        </ContactGrid>
    </>
);

export default Contact;
