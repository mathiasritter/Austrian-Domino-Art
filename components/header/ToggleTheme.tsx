import { RootState } from "../../store";
import { toggleThemeType } from "../../theme/themeSlice";
import { useSelector } from "react-redux";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import React, { useMemo } from "react";
import { withStyles, createStyles } from "@material-ui/core";
import { Theme } from "../../theme/theme";
import { useAction } from "../../hooks/useAction";
import { WhiteIconButton } from "../common/WhiteIconButton";
import { PropsWithStyles } from "../../theme/styleTypes";

const toggleThemeStyles = (theme: Theme) =>
    createStyles({
        root: {
            ["@media only screen and (max-width: 355px)"]: {
                display: "none",
            },
        },
    });

const ToggleTheme = withStyles(toggleThemeStyles)(
    ({ classes }: PropsWithStyles) => {
        const toggleTheme = useAction(toggleThemeType());

        const isLightTheme = useSelector(
            (state: RootState) => state.theme.type === "light"
        );

        const icon = useMemo(
            () => (isLightTheme ? <Brightness4Icon /> : <Brightness7Icon />),
            [isLightTheme]
        );

        return (
            <WhiteIconButton
                className={classes.root}
                onClick={toggleTheme}
                aria-label="toggle theme"
            >
                {icon}
            </WhiteIconButton>
        );
    }
);

export { ToggleTheme };
