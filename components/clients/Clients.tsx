import React from "react";
import { ClientsGrid } from "./ClientsGrid";
import { clientCards } from "./ClientCard";
import { ClientVideo } from "./ClientVideo";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Clients: React.FC = () => (
    <>
        <Typography variant="h1">Clients</Typography>
        <Box fontStyle="italic">
            <Typography variant="h4" component="div" gutterBottom>
                &quot;The Austrian Domino Art Team have been amazing: they know
                exactly what they are doing.&quot;
            </Typography>
        </Box>
        <ClientsGrid>
            {clientCards}
            <ClientVideo />
        </ClientsGrid>
    </>
);

export default Clients;
