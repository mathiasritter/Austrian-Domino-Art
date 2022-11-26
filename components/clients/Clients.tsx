import React from "react";
import { ClientsGrid } from "./ClientsGrid";
import { ClientCard } from "./ClientCard";
import { ClientVideo } from "./ClientVideo";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ClientLogo } from "../../lib/transformClientLogos";

interface Props {
    logos: ClientLogo[];
}

const Clients: React.FC<Props> = ({ logos }) => (
    <>
        <Typography
            variant="h1"
            sx={{ color: "primary.main", fontWeight: "bold" }}
        >
            Clients
        </Typography>
        <Box fontStyle="italic">
            <Typography variant="h4" component="div" gutterBottom>
                &quot;The Austrian Domino Art Team have been amazing: they know
                exactly what they are doing.&quot;
            </Typography>
        </Box>
        <ClientsGrid>
            {logos.map(({ slug, image }, index) => {
                let className = "";
                if (index >= 8 && index < 10) {
                    className = "hidden-md-down";
                }
                if (index >= 10) {
                    className = "hidden-lg-down";
                }
                return (
                    <ClientCard
                        key={slug}
                        className={className}
                        gridArea={slug}
                        image={image}
                        slug={slug}
                    />
                );
            })}
            <ClientVideo />
        </ClientsGrid>
    </>
);

export default Clients;
