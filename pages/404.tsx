import React from "react";
import { PortfolioNavBar } from "../components/header/PortfolioNavBar";
import { Section } from "./index";
import Link from "next/link";
import {
    Card,
    CardContent,
    Typography,
    CardActions,
    Button,
} from "@mui/material";

const NotFound = () => (
    <>
        <PortfolioNavBar />
        <Section background="paper">
            <Card>
                <CardContent>
                    <Typography variant="h2" component="h1" gutterBottom>
                        Not found :(
                    </Typography>
                    <Typography variant="body1">
                        The page you&apos;re looking for does not exist.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link href="/">
                        <Button color="primary">Go Home</Button>
                    </Link>
                </CardActions>
            </Card>
        </Section>
    </>
);

export default NotFound;
