import React, { useCallback, useMemo } from "react";
import IconButton from "@mui/material/IconButton";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import MenuIcon from "@mui/icons-material/Menu";
import { NavBar } from "./NavBar";
import { DesktopSections } from "./DesktopSections";
import { MobileSections } from "./MobileSections";
import { scrollToElement } from "../common/scroll";

const HomeNavBar: React.FC = () => {
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const handleCloseDrawer = useCallback(
        () => setDrawerOpen(false),
        [setDrawerOpen]
    );
    const handleOpenDrawer = useCallback(
        () => setDrawerOpen(true),
        [setDrawerOpen]
    );

    const sectionItems = useMemo(
        () => ["Home", "Portfolio", "Services", "About", "Clients", "Contact"],
        []
    );

    const scrollToSection = useCallback((event: React.SyntheticEvent) => {
        const id = event.currentTarget.textContent.toLowerCase();
        scrollToElement(id);
    }, []);

    return (
        <NavBar>
            <DesktopSections onClick={scrollToSection} items={sectionItems} />
            <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleOpenDrawer}
                sx={{ display: { xs: "block", md: "none" } }}
            >
                <MenuIcon />
            </IconButton>
            <SwipeableDrawer
                anchor="right"
                onClose={handleCloseDrawer}
                onOpen={handleOpenDrawer}
                open={drawerOpen}
                sx={{ display: { xs: "block", md: "none" } }}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
            >
                <MobileSections
                    closeDrawer={handleCloseDrawer}
                    onClick={scrollToSection}
                    items={sectionItems}
                />
            </SwipeableDrawer>
        </NavBar>
    );
};

export { HomeNavBar };
