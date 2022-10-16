import { styled } from "@mui/system";

const ContactGrid = styled("div")(({ theme }) => ({
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
