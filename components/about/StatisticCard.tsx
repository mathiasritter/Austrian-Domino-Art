import React from "react";
import SvgIcon from "@mui/material/SvgIcon";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

interface Props {
    inside: string;
    below: string;
    gridArea: string;
}

const StatisticCard: React.FC<Props> = ({ inside, below, gridArea }) => {
    const theme = useTheme();
    const atLeastSm = useMediaQuery(theme.breakpoints.up("sm"));

    return (
        <Card
            sx={{
                display: "flex",
                justifyContent: "center",
                justifyItems: "center",
                flexDirection: "column",
                gridArea,
            }}
        >
            <CardContent
                sx={{
                    "&:last-child": {
                        paddingBottom: 2,
                    },
                }}
            >
                <div>
                    <SvgIcon
                        viewBox="0 0 100 100"
                        sx={{
                            width: "100%",
                            height: "100%",
                            paddingBottom: 1,
                            maxHeight: {
                                xs: "125px",
                                sm: "150px",
                                md: "175px",
                                lg: "200px",
                                xl: "225px",
                            },
                        }}
                    >
                        <circle
                            cx="50"
                            cy="50"
                            r="48"
                            strokeWidth="4"
                            fill="none"
                            stroke={theme.palette.primary.main}
                        />
                        <text x="50%" y="50%" dy="0.333em" textAnchor="middle">
                            {inside}
                        </text>
                    </SvgIcon>
                </div>
                <Typography
                    variant={atLeastSm ? "h6" : "body1"}
                    component="div"
                    align="center"
                >
                    {below}
                </Typography>
            </CardContent>
        </Card>
    );
};

export { StatisticCard };
