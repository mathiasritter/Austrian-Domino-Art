import { Theme } from "../../theme/theme";
import { createStyles, Typography, withStyles } from "@material-ui/core";
import { PropsWithStylesAndChildren } from "../../theme/styleTypes";
import React from "react";

const projectTitleStyles = (theme: Theme) =>
    createStyles({
        root: {
            color: theme.typography.h1.color,
            fontWeight: "bold",
        },
    });

const ProjectTitle = withStyles(projectTitleStyles)(
    ({ classes, children }: PropsWithStylesAndChildren) => (
        <Typography variant="h2" component="h1" className={classes.root}>
            {children}
        </Typography>
    )
);

export { ProjectTitle };
