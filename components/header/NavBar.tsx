import React, { PropsWithChildren } from "react";
import { Theme } from "../../theme/theme";
import { AdaLogo } from "./AdaLogo";
import {
    AppBar,
    Box,
    createStyles,
    Slide,
    Toolbar,
    useMediaQuery,
    useScrollTrigger,
    WithStyles,
    withStyles,
} from "@material-ui/core";
import { ToggleTheme } from "./ToggleTheme";
import { Facebook, Instagram, YouTube } from "./Social";

const navBarStyles = (theme: Theme) =>
    createStyles({
        toolbar: {
            justifyContent: "space-between",
            [theme.breakpoints.up("md")]: {
                height: theme.spacing(8),
            },
            [theme.breakpoints.down("sm")]: {
                height: theme.spacing(6.5),
            },
        },
    });

const NavBar = withStyles(navBarStyles)(
    ({
        classes,
        children,
    }: PropsWithChildren<WithStyles<typeof navBarStyles>>) => {
        const atLeastMd = useMediaQuery((theme: Theme) =>
            theme.breakpoints.up("md")
        );
        const trigger = useScrollTrigger();
        const showAppBar = atLeastMd || !trigger;

        return (
            <>
                <Slide appear={false} direction="down" in={showAppBar}>
                    <AppBar>
                        <Toolbar
                            variant={atLeastMd ? "regular" : "dense"}
                            className={classes.toolbar}
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
    }
);

export { NavBar };
