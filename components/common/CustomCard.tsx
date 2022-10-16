import React from "react";
import Card from "@mui/material/Card";
import { styled } from "@mui/system";

const CustomCard = styled(Card)({
    "&:last-child": {
        paddingBottom: 2,
    },
});

export { CustomCard };
