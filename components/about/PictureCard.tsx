import {
    Card,
    createStyles,
    Typography,
    withStyles,
    makeStyles,
} from "@material-ui/core";
import React from "react";
import { Theme } from "../../theme/theme";
import { CardContentEqualPadding } from "../common/CustomCard";
import { LazyAboutImage } from "./LazyAboutImage";
import { PropsWithStylesAndChildren } from "../../theme/styleTypes";
import { StyleRules } from "@material-ui/styles";

interface PictureProps {
    image: string;
    alt: string;
    gridArea: string;
}

const pictureTopCardStyles = (theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            flexDirection: "column",
        },
        cardContent: {
            flexGrow: 1,
            hyphens: "auto",
            "-webkit-hyphens": "auto",
            "-ms-hyphens": "auto",
        },
    });

const pictureBottomCardStyles = (theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            flexDirection: "column-reverse",
        },
        cardContent: {
            flexGrow: 1,
            hyphens: "auto",
            "-webkit-hyphens": "auto",
            "-ms-hyphens": "auto",
        },
    });

const pictureBottomTopCardStyles = (theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            [theme.breakpoints.up("sm")]: {
                flexDirection: "column-reverse",
            },
            [theme.breakpoints.down("xs")]: {
                flexDirection: "column",
            },
        },
        cardContent: {
            flexGrow: 1,
            hyphens: "auto",
            "-webkit-hyphens": "auto",
            "-ms-hyphens": "auto",
        },
    });

const UnstyledAboutCard: React.FC<PictureProps> = ({
    image,
    alt,
    classes,
    gridArea,
    children,
}: PropsWithStylesAndChildren<
    PictureProps,
    StyleRules<Record<string, unknown>, "root" | "cardContent">
>) => {
    const { root } = makeStyles({ root: { gridArea } })();

    return (
        <Card className={`${classes.root} ${root}`}>
            <LazyAboutImage src={image} alt={alt} />
            <CardContentEqualPadding className={classes.cardContent}>
                <Typography variant="body1" component="p" align="justify">
                    {children}
                </Typography>
            </CardContentEqualPadding>
        </Card>
    );
};

const PictureTopCard = withStyles(pictureTopCardStyles)(UnstyledAboutCard);

const PictureBottomCard = withStyles(pictureBottomCardStyles)(
    UnstyledAboutCard
);

const PictureBottomTopCard = withStyles(pictureBottomTopCardStyles)(
    UnstyledAboutCard
);

export { PictureTopCard, PictureBottomCard, PictureBottomTopCard };
