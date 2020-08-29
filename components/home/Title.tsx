import { Theme } from "../../theme/theme";
import { createStyles, Typography, withStyles } from "@material-ui/core";
import React from "react";
import { PropsWithStylesAndChildren } from "../../theme/styleTypes";

interface TitleProps {
    variant: "h1" | "h2" | "h3";
}

const titleStyles = (theme: Theme) =>
    createStyles({
        root: {
            "z-index": "inherit",
            color: "#FFFFFF",
            textAlign: "center",
            fontWeight: "bold",
        },
    });

const Title = withStyles(titleStyles)(
    ({
        variant,
        classes,
        children,
    }: PropsWithStylesAndChildren<TitleProps>) => (
        <Typography variant={variant} className={classes.root}>
            {children}
        </Typography>
    )
);

export { Title };
