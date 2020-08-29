import React from "react";
import { PortfolioNavBar } from "../components/header/PortfolioNavBar";
import { GreySection } from "./index";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    Typography,
} from "@material-ui/core";
import Link from "next/link";

const NotFound = () => (
    <>
        <PortfolioNavBar />
        <GreySection>
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
        </GreySection>
    </>
);

export default NotFound;
