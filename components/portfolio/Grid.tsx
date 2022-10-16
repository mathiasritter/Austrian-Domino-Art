import { styled } from "@mui/system";

const Grid = styled("div")(({ theme }) => ({
    display: "grid",
    gridGap: theme.spacing(2),
    [theme.breakpoints.up("lg")]: {
        gridTemplateColumns: "repeat(4, 1fr)",
    },
    [theme.breakpoints.only("md")]: {
        gridTemplateColumns: "repeat(3, 1fr)",
    },
    [theme.breakpoints.only("sm")]: {
        gridTemplateColumns: "repeat(2, 1fr)",
    },
    [theme.breakpoints.down("xs")]: {
        gridTemplateColumns: "repeat(1, 1fr)",
    },
}));

export { Grid };
