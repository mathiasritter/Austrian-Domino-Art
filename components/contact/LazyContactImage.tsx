import { Theme } from "../../theme/theme";
import { createStyles, withStyles } from "@material-ui/core";
import {
    baseImageStyles,
    LazyImage,
    LazyImageProps,
} from "../common/LazyImage";
import React from "react";

const lazyContactImageStyles = (theme: Theme) =>
    createStyles({
        root: {
            position: "relative",
            width: "100%",
            height: "100%",
            [theme.breakpoints.down("xs")]: {
                minHeight: 250,
            },
            [theme.breakpoints.only("sm")]: {
                minHeight: 400,
            },
            [theme.breakpoints.up("md")]: {
                minHeight: 600,
            },
        },
        image: {
            objectFit: "cover",
            ...baseImageStyles,
        },
    });

const LazyContactImage: React.ComponentType<LazyImageProps> = withStyles(
    lazyContactImageStyles
)(LazyImage);

export { LazyContactImage };
