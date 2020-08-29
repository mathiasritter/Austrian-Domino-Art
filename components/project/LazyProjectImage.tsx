import { createStyles, withStyles } from "@material-ui/core";
import React from "react";
import { Theme } from "../../theme/theme";
import { LazyImage } from "../common/LazyImage";

const lazyProjectGridImageStyles = (theme: Theme) =>
    createStyles({
        root: {
            position: "relative",
            display: "flex",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            "& .lazyload-wrapper": {
                display: "flex",
            },
            minHeight: 50,
        },
        image: {
            width: "100%",
            height: "100%",
            objectFit: "contain",
        },
        skeletonWrapper: {
            position: "absolute",
            paddingBottom: "66.66%",
            height: "100%",
            width: "100%",
        },
        skeleton: {
            position: "absolute",
        },
    });

const LazyProjectImage = withStyles(lazyProjectGridImageStyles)(LazyImage);

export { LazyProjectImage };
