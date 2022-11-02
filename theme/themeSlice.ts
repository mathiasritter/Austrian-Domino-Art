import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";
import { PaletteMode } from "@mui/material";

interface ThemeState {
    type: PaletteMode;
}

const LOCAL_STORAGE_KEY = "theme.type";

const getDarkThemeQuery = (): MediaQueryList =>
    window.matchMedia("(prefers-color-scheme: dark)");

const getPreferredThemeType = (): PaletteMode =>
    process.browser && getDarkThemeQuery().matches ? "dark" : "light";

const readFromLocalStorage = () => {
    if (process.browser) {
        return localStorage.getItem(LOCAL_STORAGE_KEY);
    }
    return null;
};

const saveInLocalStorage = (type: PaletteMode) => {
    if (process.browser) {
        localStorage.setItem(LOCAL_STORAGE_KEY, type);
    }
};

const initialThemeType = (): PaletteMode => {
    const savedType = readFromLocalStorage();

    if (["light", "dark"].includes(savedType)) {
        return savedType as PaletteMode;
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
            action: PayloadAction<PaletteMode>
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
