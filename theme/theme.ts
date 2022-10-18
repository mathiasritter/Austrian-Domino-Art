import { red, grey, white } from "@mui/material/colors";
import {
    PaletteMode,
    createTheme as createMuiTheme,
    responsiveFontSizes,
} from "@mui/material";

const createTheme = (mode: PaletteMode, h1Color: string) =>
    responsiveFontSizes(
        createMuiTheme({
            palette: {
                primary: {
                    main: red[900],
                },
                secondary: {
                    main: grey[600],
                },
                mode,
                background: {
                    default: mode === "light" ? "#fafafa" : "#303030",
                    paper: mode === "light" ? "#fff" : "#424242",
                },
            },
            typography: {
                fontSize: 16,
                h1: {
                    color: h1Color,
                    fontWeight: "bold",
                },
            },
        })
    );

const darkTheme = createTheme("dark", red[700]);
const lightTheme = createTheme("light", red[900]);

export type Theme = typeof darkTheme;

export { darkTheme, lightTheme };
