import React, { useCallback } from "react";
import { NavBar } from "./NavBar";
import { DesktopSections } from "./DesktopSections";
import { useRouter } from "next/router";
import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { useSelector } from "react-redux";

const isFirstPageSelector = createSelector(
    (state: RootState) => state.portfolio.total,
    (total) => total === 0
);

const PortfolioNavBar = () => {
    const router = useRouter();
    const isFirstPage = useSelector(isFirstPageSelector);

    const goBack = useCallback(() => {
        if (isFirstPage) {
            router.push("/");
        } else {
            router.back();
        }
    }, [router, isFirstPage]);

    return (
        <NavBar>
            <DesktopSections onClick={goBack} items={["Back"]} />
        </NavBar>
    );
};

export { PortfolioNavBar };
