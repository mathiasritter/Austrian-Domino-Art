import { createStyles, withStyles } from "@material-ui/core";
import { Theme } from "../../theme/theme";
import {
    baseImageStyles,
    LazyImage,
    LazyImageProps,
} from "../common/LazyImage";
import React from "react";

const lazyPortfolioImageStyles = (theme: Theme) =>
    createStyles({
        root: {
            position: "relative",
            [theme.breakpoints.down("xs")]: {
                width: "40%",
            },
            [theme.breakpoints.up("sm")]: {
                width: "100%",
                paddingBottom: "66.66%",
            },
        },
        image: {
            objectFit: "cover",
            ...baseImageStyles,
        },
    });

const LazyPortfolioImage: React.ComponentType<LazyImageProps> = withStyles(
    lazyPortfolioImageStyles
)(LazyImage);

export { LazyPortfolioImage };
