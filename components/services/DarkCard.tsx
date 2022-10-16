import { CustomCard } from "../common/CustomCard";
import { styled } from "@mui/material";

const DarkCard = styled(CustomCard)(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
}));

export { DarkCard };
