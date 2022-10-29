import React from "react";
import { ContactForm } from "./ContactForm";
import { ContactGrid } from "./ContactGrid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import NoSsr from "@mui/material/NoSsr";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Image from "next/future/image";
import { ImageProps } from "../../lib/types";

export const Contact: React.FC<ImageProps> = (image) => (
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
            <Card
                sx={(theme) => ({
                    position: "relative",
                    [theme.breakpoints.down("md")]: {
                        maxHeight: "500px",
                    },
                    [theme.breakpoints.down("sm")]: {
                        maxHeight: "300px",
                    },
                })}
            >
                <Image
                    {...image}
                    placeholder="blur"
                    sizes="100vw"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                />
            </Card>
        </ContactGrid>
    </>
);

export default Contact;
