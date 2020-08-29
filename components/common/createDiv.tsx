import { Theme } from "../../theme/theme";
import { CSSProperties } from "@material-ui/core/styles/withStyles";
import { createStyles, withStyles } from "@material-ui/core";
import React from "react";
import { PropsWithStylesAndChildren } from "../../theme/styleTypes";

const createDiv = (styles: (theme: Theme) => CSSProperties) =>
    withStyles((theme: Theme) =>
        createStyles({ root: styles(theme) })
    )(
        ({
            classes,
            className,
            children,
        }: PropsWithStylesAndChildren<{ className?: string }>) => (
            <div className={`${classes.root} ${className ? className : ""}`}>
                {children}
            </div>
        )
    );

export { createDiv };
