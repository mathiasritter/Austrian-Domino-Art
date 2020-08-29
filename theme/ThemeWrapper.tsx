import { ThemeProvider } from "@material-ui/styles";
import React, { PropsWithChildren, useEffect, useMemo } from "react";
import { useAppDispatch, useTypedSelector } from "../store";
import { darkTheme, lightTheme } from "./theme";
import {
    getDarkThemeQuery,
    initialThemeType,
    setThemeType,
} from "./themeSlice";

const ThemeWrapper: React.FC<PropsWithChildren<any>> = ({
    children,
    store,
}: PropsWithChildren<any>) => {
    const dispatch = useAppDispatch();

    const isLightTheme = useTypedSelector(
        (state) => state.theme.type === "light"
    );

    const theme = useMemo(() => (isLightTheme ? lightTheme : darkTheme), [
        isLightTheme,
    ]);

    useEffect(() => {
        dispatch(setThemeType(initialThemeType()));

        const darkThemeQuery = getDarkThemeQuery();
        const listener = (event: MediaQueryListEvent) => {
            const preferredTheme = event.matches ? "dark" : "light";
            dispatch(setThemeType(preferredTheme));
        };

        if (darkThemeQuery.addEventListener) {
            darkThemeQuery.addEventListener("change", listener);
            return () => darkThemeQuery.removeEventListener("change", listener);
        } else {
            darkThemeQuery.addListener(listener);
            return () => darkThemeQuery.removeListener(listener);
        }
    }, [dispatch]);

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export { ThemeWrapper };
