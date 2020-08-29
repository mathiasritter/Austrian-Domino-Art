import { createDiv } from "../common/createDiv";
import { Theme } from "../../theme/theme";

const ContactGrid = createDiv((theme: Theme) => ({
    display: "grid",
    gridGap: theme.spacing(2),
    [theme.breakpoints.up("lg")]: {
        gridTemplateColumns: "repeat(2, 1fr)",
    },
    [theme.breakpoints.down("md")]: {
        gridTemplateColumns: "repeat(1, 1fr)",
    },
}));

export { ContactGrid };
