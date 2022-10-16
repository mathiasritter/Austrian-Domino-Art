import { logoOrder } from "./clientLogos";
import { styled } from "@mui/system";

export const ClientsGrid = styled("div")(({ theme }) => ({
    display: "grid",
    gridGap: theme.spacing(2),
    "& .hidden-md-down": {
        [theme.breakpoints.down("md")]: {
            display: "none",
        },
    },
    "& .hidden-sm-down": {
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },
    "& .hidden-xs-down": {
        [theme.breakpoints.down("xs")]: {
            display: "none",
        },
    },
    [theme.breakpoints.up("lg")]: {
        gridTemplateColumns: "repeat(6, 1fr)",
        gridTemplateAreas: `
            "video video video video ${logoOrder[0]} ${logoOrder[1]}"
            "video video video video ${logoOrder[2]} ${logoOrder[3]}"
            "video video video video ${logoOrder[4]} ${logoOrder[5]}"
            "${logoOrder[6]} ${logoOrder[7]} ${logoOrder[8]} ${logoOrder[9]} ${logoOrder[10]} ${logoOrder[11]}"
        `,
    },
    [theme.breakpoints.only("md")]: {
        gridTemplateColumns: "repeat(5, 1fr)",
        gridTemplateAreas: `
            "video video video video video"
            "${logoOrder[0]} ${logoOrder[1]} ${logoOrder[2]} ${logoOrder[3]} ${logoOrder[4]}"
            "${logoOrder[5]} ${logoOrder[6]} ${logoOrder[7]} ${logoOrder[8]} ${logoOrder[9]}"
        `,
    },
    [theme.breakpoints.only("sm")]: {
        gridTemplateColumns: "repeat(4, 1fr)",
        gridTemplateAreas: `
            "video video video video"
            "${logoOrder[0]} ${logoOrder[1]} ${logoOrder[2]} ${logoOrder[3]}"
            "${logoOrder[4]} ${logoOrder[5]} ${logoOrder[6]} ${logoOrder[7]}"
        `,
    },
    [theme.breakpoints.down("xs")]: {
        gridTemplateColumns: "repeat(2, 1fr)",
        gridTemplateAreas: `
            "video video"
            "${logoOrder[0]} ${logoOrder[1]}"
            "${logoOrder[2]} ${logoOrder[3]}"
            "${logoOrder[4]} ${logoOrder[5]}"
            "${logoOrder[6]} ${logoOrder[7]}"
        `,
    },
}));
