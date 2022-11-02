import React from "react";
import { CustomCard } from "../common/CustomCard";
import { styled } from "@mui/system";

const BrightCard = styled(CustomCard)(({ theme }) => ({
    backgroundColor: theme.palette.action.focus,
}));

export { BrightCard };
