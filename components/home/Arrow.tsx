import { Theme } from "../../theme/theme";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import React, { useCallback } from "react";
import { PropsWithStyles } from "../../theme/styleTypes";
import { createStyles, withStyles } from "@material-ui/core";

const arrowStyles = (theme: Theme) =>
    createStyles({
        root: {
            cursor: "pointer",
            height: "60px",
            width: "60px",
            color: "white",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "50px",
            animation: "3s infinite $bounce",
        },
        "@keyframes bounce": {
            "0%, 20%, 50%, 80%, 100%": {
                transform: "translateY(0)",
            },
            "40%": {
                transform: "translateY(-30px)",
            },
            "60%": {
                transform: "translateY(-15px)",
            },
        },
    });

const Arrow = withStyles(arrowStyles)(({ classes }: PropsWithStyles) => {
    const handleClick = useCallback(() => {
        document.getElementById("portfolio").scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }, []);
    return (
        <KeyboardArrowDownIcon className={classes.root} onClick={handleClick} />
    );
});

export { Arrow };
