import { Logo } from "./Logo";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

interface LogoCardProps {
    gridArea: string;
}

const LogoCard: React.FC<LogoCardProps> = ({ gridArea }) => (
    <Card
        sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gridArea,
        }}
    >
        <CardContent
            sx={{
                height: "100%",
                width: "100%",
                maxWidth: {
                    xs: "175px",
                    sm: "225px",
                    md: "400px",
                    lg: "300px",
                    xl: "400px",
                },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                "&:last-child": {
                    paddingBottom: 2,
                },
            }}
        >
            <Logo />
        </CardContent>
    </Card>
);

export { LogoCard };
