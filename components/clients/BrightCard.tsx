import { Theme } from "../../theme/theme";
import { createStyles, withStyles } from "@material-ui/core";
import { CustomCard } from "../common/CustomCard";

const brightCardStyles = (theme: Theme) =>
    createStyles({
        root: { backgroundColor: theme.palette.action.focus },
    });

const BrightCard = withStyles(brightCardStyles)(CustomCard);

export { BrightCard };
