import React, { PropsWithChildren } from "react";
import { Theme } from "../../theme/theme";
import { AdaLogo } from "./AdaLogo";
import { ToggleTheme } from "./ToggleTheme";
import { Facebook, Instagram, YouTube } from "./Social";
import useMediaQuery from "@mui/material/useMediaQuery";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";

const NavBar: React.FC<PropsWithChildren> = ({ children }) => {
    const atLeastMd = useMediaQuery((theme: Theme) =>
        theme.breakpoints.up("md")
    );
    const trigger = useScrollTrigger();
    const showAppBar = atLeastMd || !trigger;

    return (
        <>
            <Slide appear={false} direction="down" in={showAppBar}>
                <AppBar enableColorOnDark>
                    <Toolbar
                        variant={atLeastMd ? "regular" : "dense"}
                        sx={{
                            justifyContent: "space-between",
                            height: {
                                xs: 6.5,
                                md: 8,
                            },
                        }}
                    >
                        <Box display="flex" alignItems="center">
                            <AdaLogo />
                            <ToggleTheme />
                            <YouTube />
                            <Facebook />
                            <Instagram />
                        </Box>
                        {children}
                    </Toolbar>
                </AppBar>
            </Slide>
        </>
    );
};

export { NavBar };
