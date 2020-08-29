import {
    Action,
    AnyAction,
    combineReducers,
    configureStore,
    DeepPartial,
    EnhancedStore,
    getDefaultMiddleware,
    ThunkAction,
} from "@reduxjs/toolkit";
import {
    mergePortfolioStates,
    portfolioReducer,
} from "./components/portfolio/portfolioSlice";
import { useMemo } from "react";
import { mergeThemeStates, themeReducer } from "./theme/themeSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import {
    mergeNotificationStates,
    notificationReducer,
} from "./components/notification/notificationSlice";

const rootReducer = combineReducers({
    portfolio: portfolioReducer,
    theme: themeReducer,
    notification: notificationReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export interface InitialReduxStateProps {
    initialReduxState: RootState;
}

const middleware = getDefaultMiddleware<RootState>();

type StoreType = EnhancedStore<RootState, AnyAction, typeof middleware>;
let store: StoreType;

export type AppDispatch = typeof store.dispatch;
const useAppDispatch = () => useDispatch<AppDispatch>();

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

const initStore = (preloadedState: RootState): StoreType => {
    return configureStore({
        reducer: rootReducer,
        middleware,
        preloadedState: preloadedState as DeepPartial<RootState>,
    });
};

const initializeStore = (preloadedState?: RootState): StoreType => {
    let _store = store ?? initStore(preloadedState);

    // After navigating to a page with an initial Redux state, merge that state
    // with the current state in the store, and create a new store
    if (preloadedState && store) {
        const currentState = store.getState();

        const mergedState: RootState = {
            portfolio: mergePortfolioStates(
                currentState.portfolio,
                preloadedState.portfolio
            ),
            theme: mergeThemeStates(currentState.theme, preloadedState.theme),
            notification: mergeNotificationStates(
                currentState.notification,
                preloadedState.notification
            ),
        };

        _store = initStore(mergedState);

        // Reset the current store
        store = undefined;
    }

    // For SSG and SSR always create a new store
    if (typeof window === "undefined") {
        return _store;
    }

    // Create the store once in the client
    if (!store) {
        store = _store;
    }

    return _store;
};

const useStore = (initialState: RootState): StoreType => {
    return useMemo(() => initializeStore(initialState), [initialState]);
};

export { initializeStore, useStore, useAppDispatch, useTypedSelector };
