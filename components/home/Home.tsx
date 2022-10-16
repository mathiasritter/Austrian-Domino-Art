import React from "react";
import { Background } from "./Background";
import { Title } from "./Title";
import { Arrow } from "./Arrow";
import Box from "@mui/material/Box";

const Home = () => (
    <Box sx={{ height: "100vh" }}>
        <Background />
        <Box
            sx={{
                zIndex: "1",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "100%",
            }}
        >
            <Title variant="h1">Austrian Domino Art</Title>
            <Title variant="h2">Professional Domino Toppling</Title>
            <Arrow />
        </Box>
    </Box>
);

export { Home };
