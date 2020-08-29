import React from "react";
import { Box, Typography } from "@material-ui/core";
import { ClientsGrid } from "./ClientsGrid";
import { clientCards } from "./ClientCard";
import { ClientVideo } from "./ClientVideo";

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
