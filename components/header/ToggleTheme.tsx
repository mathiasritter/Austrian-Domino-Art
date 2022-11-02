import { RootState } from "../../store";
import { toggleThemeType } from "../../theme/themeSlice";
import { useSelector } from "react-redux";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import React, { useMemo } from "react";
import { useAction } from "../../hooks/useAction";
import { WhiteIconButton } from "../common/WhiteIconButton";

const ToggleTheme: React.FC = () => {
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
            sx={{
                "@media only screen and (max-width: 355px)": {
                    display: "none",
                },
            }}
            onClick={toggleTheme}
            aria-label="toggle theme"
        >
            {icon}
        </WhiteIconButton>
    );
};

export { ToggleTheme };
