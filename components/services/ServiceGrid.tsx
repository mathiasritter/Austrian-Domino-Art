import { styled } from "@mui/system";

const ServiceGrid = styled("div")(({ theme }) => ({
    display: "grid",
    gridGap: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
        gridTemplateColumns: "repeat(3, 1fr)",
    },
    [theme.breakpoints.down("sm")]: {
        gridTemplateColumns: "repeat(1, 1fr)",
    },
}));

export { ServiceGrid };
