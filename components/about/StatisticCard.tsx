import { Theme } from "../../theme/theme";
import {
    Card,
    CardContent,
    createStyles,
    SvgIcon,
    Typography,
    useMediaQuery,
    withStyles,
    makeStyles,
} from "@material-ui/core";
import React from "react";
import { PropsWithStyles } from "../../theme/styleTypes";

interface Props {
    inside: string;
    below: string;
    gridArea: string;
}

const statisticStyles = (theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            justifyContent: "center",
            justifyItems: "center",
            flexDirection: "column",
        },
        content: {
            "&:last-child": {
                paddingBottom: theme.spacing(2),
            },
        },
        svg: {
            width: "100%",
            height: "100%",
            paddingBottom: theme.spacing(1),
            [theme.breakpoints.up("xl")]: {
                maxHeight: "225px",
            },
            [theme.breakpoints.only("lg")]: {
                maxHeight: "200px",
            },
            [theme.breakpoints.only("md")]: {
                maxHeight: "175px",
            },
            [theme.breakpoints.only("sm")]: {
                maxHeight: "150px",
            },
            [theme.breakpoints.only("xs")]: {
                maxHeight: "125px",
            },
        },
        circle: {
            stroke: theme.palette.primary.main,
        },
    });

const StatisticCard = withStyles(statisticStyles)(
    ({
        inside,
        below,
        gridArea,
        classes,
    }: PropsWithStyles<Props, typeof statisticStyles>) => {
        const atLeastSm = useMediaQuery((theme: Theme) =>
            theme.breakpoints.up("sm")
        );

        const { root } = makeStyles({ root: { gridArea } })();

        return (
            <Card className={classes.root + " " + root}>
                <CardContent className={classes.content}>
                    <div>
                        <SvgIcon viewBox="0 0 100 100" className={classes.svg}>
                            <circle
                                cx="50"
                                cy="50"
                                r="48"
                                strokeWidth="4"
                                fill="none"
                                className={classes.circle}
                            />
                            <text
                                x="50%"
                                y="50%"
                                dy="0.333em"
                                textAnchor="middle"
                            >
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
    }
);

export { StatisticCard };
