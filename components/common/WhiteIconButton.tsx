import { Theme } from "../../theme/theme";
import { createStyles } from "@material-ui/core/styles";
import withStyles from "@material-ui/core/styles/withStyles";
import { IconButton, IconButtonProps } from "@material-ui/core";
import React from "react";
import { PropsWithStylesAndChildren } from "../../theme/styleTypes";

const whiteButtonIconStyles = (theme: Theme) =>
    createStyles({
        root: {
            color: "white",
        },
    });
const WhiteIconButton = withStyles(whiteButtonIconStyles)(
    ({
        classes,
        children,
        className,
        ...buttonProps
    }: PropsWithStylesAndChildren<IconButtonProps>) => (
        <IconButton
            className={`${classes.root} ${className ? className : ""}`}
            {...buttonProps}
        >
            {children}
        </IconButton>
    )
);
export { WhiteIconButton };
