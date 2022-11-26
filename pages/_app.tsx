import { AppProps } from "next/app";
import Router from "next/router";
import NProgress from "nprogress";
import React, { useEffect } from "react";
import smoothscroll from "smoothscroll-polyfill";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollRestoration from "../hooks/useScrollRestoration";
import * as Sentry from "@sentry/node";
import { RewriteFrames } from "@sentry/integrations";
import getConfig from "next/config";
import "pure-react-carousel/dist/react-carousel.es.css";
import { QueryClient } from "@tanstack/query-core";
import { QueryClientProvider } from "@tanstack/react-query";
import { SnackbarProvider } from "notistack";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import { theme } from "../theme/theme";

if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
    const config = getConfig();
    const distDir = `${config.serverRuntimeConfig.rootDir}/.next`;
    Sentry.init({
        enabled: process.env.NODE_ENV === "production",
        integrations: [
            new RewriteFrames({
                iteratee: (frame) => {
                    frame.filename = frame.filename.replace(
                        distDir,
                        "app:///_next"
                    );
                    return frame;
                },
            }),
        ],
        dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    });
}

// kick off the polyfill!
if (process.browser) {
    // @ts-ignore
    window.__forceSmoothScrollPolyfill__ = true;
    // always forcing polyfill because of problems with the nav drawer
    smoothscroll.polyfill();
}

NProgress.configure({ showSpinner: false });

Router.events.on("routeChangeStart", (url) => {
    NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const queryClient = new QueryClient();

const App = ({
    Component,
    pageProps,
    router,
    err,
}: AppProps & { err: unknown }) => {
    useScrollRestoration(router);

    useEffect(() => {
        const jssStyles = document.querySelector("#jss-server-side");
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    const myRef = React.useRef<SnackbarProvider>(null);

    // Passing err to Component:
    // Workaround for https://github.com/vercel/next.js/issues/8592
    return (
        <QueryClientProvider client={queryClient}>
            <CssVarsProvider theme={theme}>
                <CssBaseline />
                <SnackbarProvider
                    ref={myRef}
                    action={(snackbarId) => (
                        <IconButton
                            size="small"
                            aria-label="close"
                            color="inherit"
                            onClick={() =>
                                myRef.current.closeSnackbar(snackbarId)
                            }
                        >
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    )}
                >
                    <Component {...pageProps} err={err} />
                </SnackbarProvider>
            </CssVarsProvider>
        </QueryClientProvider>
    );
};

export default App;
