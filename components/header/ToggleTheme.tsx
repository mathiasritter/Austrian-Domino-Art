import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import React, { useCallback, useMemo } from "react";
import { WhiteIconButton } from "../common/WhiteIconButton";
import { useColorScheme } from "@mui/material/styles";

const ToggleTheme: React.FC = () => {
    const { mode, setMode } = useColorScheme();

    const toggleTheme = useCallback(() => {
        setMode(mode === "light" ? "dark" : "light");
    }, [mode]);

    const icon = useMemo(
        () => (mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />),
        [mode]
    );

    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        // for server-side rendering
        // learn more at https://github.com/pacocoursey/next-themes#avoid-hydration-mismatch
        return null;
    }

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
