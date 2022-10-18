import React, { PropsWithChildren } from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Image from "next/future/image";
import CardContent from "@mui/material/CardContent";
import { Box } from "@mui/material";
import { ImageProps } from "../../lib/types";

interface PictureProps {
    image: ImageProps;
    gridArea: "card1" | "card2" | "card3";
}

const PictureCard: React.FC<PropsWithChildren<PictureProps>> = ({
    image,
    gridArea,
    children,
}) => (
    <Card
        sx={{
            display: "flex",
            flexDirection: {
                xs: "column",
                sm: gridArea === "card2" ? "column-reverse" : "column",
            },
            gridArea,
        }}
    >
        <Box
            sx={{
                position: "relative",
                width: "100%",
                paddingBottom: "56.25%",
            }}
        >
            <Image {...image} fill placeholder="blur" />
        </Box>
        <CardContent
            sx={{
                flexGrow: 1,
                hyphens: "auto",
            }}
        >
            <Typography variant="body1" component="p" align="justify">
                {children}
            </Typography>
        </CardContent>
    </Card>
);

export { PictureCard };
