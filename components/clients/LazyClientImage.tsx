import { Theme } from "../../theme/theme";
import { baseImageStyles, LazyImage } from "../common/LazyImage";
import { createStyles, withStyles } from "@material-ui/core";

const lazyClientImageStyles = (theme: Theme) =>
    createStyles({
        root: {
            position: "relative",
            width: "100%",
            height: "100%",
            [theme.breakpoints.up("md")]: {
                minHeight: "200px",
            },
            [theme.breakpoints.only("sm")]: {
                minHeight: "150px",
            },
            [theme.breakpoints.down("xs")]: {
                minHeight: "100px",
            },
        },
        image: {
            ...baseImageStyles,
            margin: "auto",
            objectFit: "contain",
            padding: theme.spacing(2),
            [theme.breakpoints.up("md")]: {
                maxHeight: "200px",
            },
            [theme.breakpoints.only("sm")]: {
                maxHeight: "150px",
            },
            [theme.breakpoints.down("xs")]: {
                maxHeight: "100px",
            },
        },
        skeleton: {
            maxHeight: "initial",
        },
    });

const LazyClientImage = withStyles(lazyClientImageStyles)(LazyImage);

export { LazyClientImage };
