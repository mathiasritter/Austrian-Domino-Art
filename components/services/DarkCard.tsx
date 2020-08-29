import { Theme } from "../../theme/theme";
import { createStyles, withStyles } from "@material-ui/core";
import { CustomCard } from "../common/CustomCard";

const darkCardStyles = (theme: Theme) =>
    createStyles({
        root: { backgroundColor: theme.palette.background.default },
    });

const DarkCard = withStyles(darkCardStyles)(CustomCard);

export { DarkCard };
