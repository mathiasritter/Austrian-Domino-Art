import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";
import { PaletteType } from "@material-ui/core";

interface ThemeState {
    type: PaletteType;
}

const LOCAL_STORAGE_KEY = "theme.type";

const getDarkThemeQuery = (): MediaQueryList =>
    window.matchMedia("(prefers-color-scheme: dark)");

const getPreferredThemeType = (): PaletteType =>
    process.browser && getDarkThemeQuery().matches ? "dark" : "light";

const readFromLocalStorage = () => {
    if (process.browser) {
        return localStorage.getItem(LOCAL_STORAGE_KEY);
    }
    return null;
};

const saveInLocalStorage = (type: PaletteType) => {
    if (process.browser) {
        localStorage.setItem(LOCAL_STORAGE_KEY, type);
    }
};

const initialThemeType = (): PaletteType => {
    const savedType = readFromLocalStorage();

    if (["light", "dark"].includes(savedType)) {
        return savedType as PaletteType;
    }

    const initialType = getPreferredThemeType();
    saveInLocalStorage(initialType);

    return initialType;
};

const initialThemeState: ThemeState = { type: initialThemeType() };

const mergeThemeStates = (
    current: ThemeState,
    preloaded: ThemeState
): ThemeState => {
    return {
        ...preloaded,
        ...current,
    };
};

const themeSlice = createSlice({
    name: "theme",
    initialState: initialThemeState,
    reducers: {
        setType: (
            state: Draft<ThemeState>,
            action: PayloadAction<PaletteType>
        ) => {
            state.type = action.payload;
            saveInLocalStorage(state.type);
        },
        toggleType: (state: Draft<ThemeState>) => {
            state.type = state.type === "light" ? "dark" : "light";
            saveInLocalStorage(state.type);
        },
    },
});

const { setType, toggleType } = themeSlice.actions;
const themeReducer = themeSlice.reducer;

export {
    mergeThemeStates,
    setType as setThemeType,
    toggleType as toggleThemeType,
    initialThemeType,
    themeReducer,
    getDarkThemeQuery,
};
