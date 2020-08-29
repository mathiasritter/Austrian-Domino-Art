import { Theme } from "../../theme/theme";
import { baseImageStyles, LazyImage } from "../common/LazyImage";
import { createStyles, withStyles } from "@material-ui/core";

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

const LazyAboutImage = withStyles(lazyAboutImageStyles)(LazyImage);

export { LazyAboutImage };
