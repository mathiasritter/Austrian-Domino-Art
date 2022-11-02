import React, { PropsWithChildren } from "react";
import Typography from "@mui/material/Typography";

interface TitleProps {
    variant: "h1" | "h2" | "h3";
}

const Title: React.FC<PropsWithChildren<TitleProps>> = ({
    children,
    variant,
}) => (
    <Typography
        variant={variant}
        sx={{
            zIndex: "inherit",
            color: "#FFFFFF",
            textAlign: "center",
            fontWeight: "bold",
        }}
    >
        {children}
    </Typography>
);

export { Title };
