import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import red from "@material-ui/core/colors/red";
import grey from "@material-ui/core/colors/grey";
import responsiveFontSizes from "@material-ui/core/styles/responsiveFontSizes";
import { PaletteType } from "@material-ui/core";

const createTheme = (type: PaletteType, h1Color: string) =>
    responsiveFontSizes(
        createMuiTheme({
            palette: {
                primary: {
                    main: red[900],
                },
                secondary: {
                    main: grey[600],
                },
                type,
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
