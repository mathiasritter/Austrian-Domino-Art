import React, { useCallback } from "react";
import { NavBar } from "./NavBar";
import { DesktopSections } from "./DesktopSections";
import { useRouter } from "next/router";

const PortfolioNavBar = () => {
    const router = useRouter();

    const goBack = useCallback(() => {
        router.back();
    }, [router]);

    return (
        <NavBar>
            <DesktopSections onClick={goBack} items={["Back"]} />
        </NavBar>
    );
};

export { PortfolioNavBar };
