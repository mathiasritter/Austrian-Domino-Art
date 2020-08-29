import React from "react";
import { Theme } from "../../theme/theme";
import { SectionWrapper } from "./SectionWrapper";
import { createStyles, Typography, withStyles } from "@material-ui/core";
import { PropsWithStyles } from "../../theme/styleTypes";

interface DesktopSectionProps {
    onClick: (event: React.SyntheticEvent) => void;
    items: string[];
}

const desktopSectionStyles = (theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            alignItems: "center",
            height: "100%",
            "& .active": {
                color: "black",
            },
            "& div": {
                paddingRight: theme.spacing(1),
                paddingLeft: theme.spacing(1),
                cursor: "pointer",
                color: "white",
                "&:hover": {
                    color: "black",
                },
            },
        },
    });

const DesktopSections = withStyles(desktopSectionStyles)(
    ({
        classes,
        onClick,
        items,
    }: PropsWithStyles<DesktopSectionProps, typeof desktopSectionStyles>) => (
        <SectionWrapper classes={classes} containerTag="nav" items={items}>
            {items.map((item: string) => (
                <Typography
                    key={item}
                    variant="h6"
                    component="div"
                    onClick={onClick}
                >
                    {item}
                </Typography>
            ))}
        </SectionWrapper>
    )
);

export { DesktopSections };
