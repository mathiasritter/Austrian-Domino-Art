import { CustomCard } from "../common/CustomCard";
import type {} from "@mui/material/themeCssVarsAugmentation";
import { styled } from "@mui/material";

const DarkCard = styled(CustomCard)(({ theme }) => ({
    backgroundColor: theme.vars.palette.background.default,
}));

export { DarkCard };
