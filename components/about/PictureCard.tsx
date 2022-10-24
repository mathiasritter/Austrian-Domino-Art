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
        <Image
            {...image}
            placeholder="blur"
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
        />
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
