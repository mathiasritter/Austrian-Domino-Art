import { Theme } from "../../theme/theme";
import {
    baseImageStyles,
    LazyImage,
    LazyImageProps,
} from "../common/LazyImage";
import { createStyles, withStyles } from "@material-ui/core";
import React from "react";

const lazyAboutImageStyles = (theme: Theme) =>
    createStyles({
        root: {
            position: "relative",
            width: "100%",
            paddingBottom: "56.25%",
        },
        image: {
            objectFit: "cover",
            ...baseImageStyles,
        },
    });

const LazyAboutImage: React.ComponentType<LazyImageProps> = withStyles(
    lazyAboutImageStyles
)(LazyImage);

export { LazyAboutImage };
