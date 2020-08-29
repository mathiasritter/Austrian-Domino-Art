import { Logo } from "./Logo";
import React from "react";
import { Theme } from "../../theme/theme";
import {
    Card,
    CardContent,
    createStyles,
    withStyles,
    makeStyles,
} from "@material-ui/core";
import { PropsWithStyles } from "../../theme/styleTypes";

interface LogoCardProps {
    gridArea: string;
}

const logoCardStyles = (theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
        content: {
            height: "100%",
            width: "100%",
            [theme.breakpoints.up("xl")]: {
                maxWidth: "400px",
            },
            [theme.breakpoints.only("lg")]: {
                maxWidth: "300px",
            },
            [theme.breakpoints.only("md")]: {
                maxWidth: "400px",
            },
            [theme.breakpoints.only("sm")]: {
                maxWidth: "225px",
            },
            [theme.breakpoints.only("xs")]: {
                maxWidth: "175px",
            },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            "&:last-child": {
                paddingBottom: theme.spacing(2),
            },
        },
    });

const LogoCard = withStyles(logoCardStyles)(
    ({
        classes,
        gridArea,
    }: PropsWithStyles<LogoCardProps, typeof logoCardStyles>) => {
        const { root } = makeStyles({ root: { gridArea } })();

        return (
            <Card className={classes.root + " " + root}>
                <CardContent className={classes.content}>
                    <Logo />
                </CardContent>
            </Card>
        );
    }
);

export { LogoCard };
