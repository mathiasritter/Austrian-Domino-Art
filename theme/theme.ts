import { red, grey } from "@mui/material/colors";
import {
    experimental_extendTheme as extendTheme,
    PaletteOptions,
    responsiveFontSizes,
} from "@mui/material";

const commonPalette: PaletteOptions = {
    primary: {
        main: red[900],
    },
    secondary: {
        main: grey[600],
    },
};

const theme = responsiveFontSizes(
    extendTheme({
        colorSchemes: {
            light: {
                palette: {
                    ...commonPalette,
                    background: {
                        default: "#fafafa",
                        paper: "#fff",
                    },
                },
            },
            dark: {
                palette: {
                    ...commonPalette,
                    background: {
                        default: "#303030",
                        paper: "#424242",
                    },
                },
            },
        },
    })
);

type Theme = typeof theme;

export { theme };
export type { Theme };
