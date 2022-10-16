import React from "react";
import { ContactForm } from "./ContactForm";
import { ContactGrid } from "./ContactGrid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import NoSsr from "@mui/material/NoSsr";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Image from "next/image";

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
                <Image
                    alt="red and white dominoes showing the Austrian Domino Art logo"
                    src="https://res.cloudinary.com/austriandominoart/image/upload/c_scale,dpr_auto,f_auto,q_auto:eco,w_1200/general/Dominoes-Walls.jpg"
                    layout="fill"
                    objectFit="cover"
                />
            </Card>
        </ContactGrid>
    </>
);

export default Contact;
