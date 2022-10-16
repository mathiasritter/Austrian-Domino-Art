import React, { PropsWithChildren } from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import CardContent from "@mui/material/CardContent";

interface PictureProps {
    image: string;
    alt: string;
    gridArea: string;
}

const PictureCard: React.FC<PropsWithChildren<PictureProps>> = ({
    image,
    alt,
    gridArea,
    children,
}) => (
    <Card sx={{ display: "flex", flexDirection: "column", gridArea }}>
        <Image src={image} alt={alt} layout="fill" />
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
