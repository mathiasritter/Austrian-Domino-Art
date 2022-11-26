import React from "react";
import { CustomCard } from "../common/CustomCard";
import type {} from "@mui/material/themeCssVarsAugmentation";
import { styled } from "@mui/material";

const BrightCard = styled(CustomCard)(({ theme }) => ({
    backgroundColor: theme.vars.palette.action.focus,
}));

export { BrightCard };
