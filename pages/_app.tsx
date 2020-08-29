import { AppProps } from "next/app";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import React, { useEffect } from "react";
import smoothscroll from "smoothscroll-polyfill";
import { CssBaseline } from "@material-ui/core";
import { useStore } from "../store";
import { Provider } from "react-redux";
import useScrollRestoration from "../hooks/useScrollRestoration";
import { ThemeWrapper } from "../theme/ThemeWrapper";
import { Notifications } from "../components/notification/Notifications";
import * as Sentry from "@sentry/node";
import { RewriteFrames } from "@sentry/integrations";
import getConfig from "next/config";
import "pure-react-carousel/dist/react-carousel.es.css";

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
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
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

const App = ({
    Component,
    pageProps,
    router,
    err,
}: AppProps & { err: unknown }) => {
    useScrollRestoration(router);

    const store = useStore(pageProps.initialReduxState);

    useEffect(() => {
        const jssStyles = document.querySelector("#jss-server-side");
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    // Passing err to Component:
    // Workaround for https://github.com/vercel/next.js/issues/8592
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
            </Head>
            <Provider store={store}>
                <ThemeWrapper>
                    <CssBaseline />
                    <Component {...pageProps} err={err} />
                    <Notifications />
                </ThemeWrapper>
            </Provider>
        </>
    );
};

export default App;
