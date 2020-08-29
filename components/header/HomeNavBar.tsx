import React, { useCallback, useMemo } from "react";
import { Hidden, IconButton, SwipeableDrawer } from "@material-ui/core";
import { NavBar } from "./NavBar";
import { DesktopSections } from "./DesktopSections";
import { MobileSections } from "./MobileSections";
import { scrollToElement } from "../common/scroll";
import MenuIcon from "@material-ui/icons/Menu";

const HomeNavBar: React.FC = () => {
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const handleCloseDrawer = useCallback(() => setDrawerOpen(false), [
        setDrawerOpen,
    ]);
    const handleOpenDrawer = useCallback(() => setDrawerOpen(true), [
        setDrawerOpen,
    ]);

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
            <Hidden smDown implementation="css">
                <DesktopSections
                    onClick={scrollToSection}
                    items={sectionItems}
                />
            </Hidden>
            <Hidden mdUp implementation="css">
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={handleOpenDrawer}
                >
                    <MenuIcon />
                </IconButton>
                <SwipeableDrawer
                    anchor="right"
                    onClose={handleCloseDrawer}
                    onOpen={handleOpenDrawer}
                    open={drawerOpen}
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
            </Hidden>
        </NavBar>
    );
};

export { HomeNavBar };
