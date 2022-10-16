import { styled } from "@mui/system";

const AboutGrid = styled("div")(({ theme }) => ({
    display: "grid",
    gridGap: theme.spacing(2),
    [theme.breakpoints.up("lg")]: {
        gridTemplateColumns: "repeat(9, 1fr)",
        gridTemplateAreas: `
            "logo logo logo stat1 stat1 stat2 stat2 stat3 stat3"
            "card1 card1 card1 card2 card2 card2 card3 card3 card3"
        `,
    },
    [theme.breakpoints.only("md")]: {
        gridTemplateColumns: "repeat(6, 1fr)",
        gridTemplateAreas: `
            "stat1 stat1 stat2 stat2 stat3 stat3"
            "logo logo logo card1 card1 card1"
            "card2 card2 card2 card3 card3 card3"
        `,
    },
    [theme.breakpoints.only("sm")]: {
        gridTemplateColumns: "repeat(2, 1fr)",
        gridTemplateAreas: `
            "logo stat1"
            "stat2 stat3"
            "card1 card1"
            "card2 card3"
        `,
    },
    [theme.breakpoints.down("xs")]: {
        gridTemplateColumns: "repeat(2, 1fr)",
        gridTemplateAreas: `
            "logo stat1"
            "stat2 stat3"
            "card1 card1"
            "card2 card2"
            "card3 card3"
        `,
    },
}));

export { AboutGrid };
