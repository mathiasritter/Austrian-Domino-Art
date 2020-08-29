import { Theme } from "../../theme/theme";
import React from "react";
import { createStyles, withStyles } from "@material-ui/core";
import { PropsWithStyles } from "../../theme/styleTypes";

const backgroundStyles = (theme: Theme) =>
    createStyles({
        root: {
            position: "absolute",
            width: "100%",
            height: "100vh",
            objectFit: "cover",
        },
    });

const Background = withStyles(backgroundStyles)(
    ({ classes }: PropsWithStyles) => (
        <img
            className={classes.root}
            alt="red and white dominoes showing the Austrian Domino Art logo"
            srcSet="
        https://res.cloudinary.com/austriandominoart/image/upload/c_scale,dpr_auto,f_auto,q_auto:eco,w_1800/general/AustrianDominoArt-BG.jpg 1800w,
        https://res.cloudinary.com/austriandominoart/image/upload/c_scale,dpr_auto,f_auto,q_auto:eco,w_1200/general/AustrianDominoArt-BG.jpg 1200w,
        https://res.cloudinary.com/austriandominoart/image/upload/c_scale,dpr_auto,f_auto,q_auto:eco,w_992/general/AustrianDominoArt-BG.jpg 992w,
        https://res.cloudinary.com/austriandominoart/image/upload/c_scale,dpr_auto,f_auto,q_auto:eco,w_768/general/AustrianDominoArt-BG.jpg 768w,
        https://res.cloudinary.com/austriandominoart/image/upload/c_scale,dpr_auto,f_auto,q_auto:eco,w_576/general/AustrianDominoArt-BG.jpg 576w,
        "
        />
    )
);

export { Background };
