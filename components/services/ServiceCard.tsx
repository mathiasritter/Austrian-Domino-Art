import Link from "next/link";
import React from "react";
import { Theme } from "../../theme/theme";
import {
    Box,
    CardActionArea,
    CardContent,
    createStyles,
    Divider,
    SvgIconTypeMap,
    Typography,
    withStyles,
} from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import { ServiceIcon } from "./ServiceIcon";
import { DarkCard } from "./DarkCard";
import { PropsWithStyles } from "../../theme/styleTypes";

interface Props {
    name: string;
    description: string;
    exampleSlug: string;
    icon: OverridableComponent<SvgIconTypeMap>;
    iconSize: number;
}

const serviceCardStyles = (theme: Theme) =>
    createStyles({
        actionArea: {
            display: "flex",
            flexDirection: "column",
            height: "100%",
        },
        content: {
            display: "flex",
            flexGrow: 1,
            height: "100%",
            "&:last-child": {
                paddingBottom: theme.spacing(2),
            },
            [theme.breakpoints.up("md")]: {
                flexDirection: "column",
            },
            [theme.breakpoints.only("sm")]: {
                alignItems: "center",
            },
            [theme.breakpoints.only("xs")]: {
                flexDirection: "column",
            },
        },
        icon: {
            [theme.breakpoints.up("md")]: {
                marginTop: theme.spacing(2),
                marginBottom: theme.spacing(2),
            },
            [theme.breakpoints.only("sm")]: {
                marginRight: theme.spacing(1),
            },
            [theme.breakpoints.down("xs")]: {
                marginBottom: theme.spacing(1),
            },
        },
        arrow: {
            [theme.breakpoints.only("sm")]: {
                transform: "rotate(-90deg)",
            },
            [theme.breakpoints.down("xs")]: {
                display: "none",
            },
        },
        text: {
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
        },
        title: {
            [theme.breakpoints.up("md")]: {
                textAlign: "center",
            },
            [theme.breakpoints.down("xs")]: {
                textAlign: "center",
            },
            paddingBottom: theme.spacing(0.5),
        },
        description: {
            flexGrow: 1,
            paddingTop: theme.spacing(1),
            hyphens: "auto",
            "-webkit-hyphens": "auto",
            "-ms-hyphens": "auto",
        },
    });

const ServiceCard = withStyles(serviceCardStyles)(
    (props: PropsWithStyles<Props, typeof serviceCardStyles>) => (
        <DarkCard>
            <Link
                href={"/portfolio/[slug]"}
                as={`/portfolio/${props.exampleSlug}`}
                passHref={true}
            >
                <CardActionArea
                    className={props.classes.actionArea}
                    component="a"
                >
                    <CardContent className={props.classes.content}>
                        <ServiceIcon
                            icon={props.icon}
                            iconSize={props.iconSize}
                            className={props.classes.icon}
                        />
                        <Box textAlign="center" className={props.classes.arrow}>
                            <KeyboardArrowDownIcon
                                fontSize="large"
                                color="secondary"
                            />
                        </Box>
                        <Box className={props.classes.text}>
                            <Typography
                                variant="h4"
                                component="h2"
                                className={props.classes.title}
                            >
                                {props.name}
                            </Typography>
                            <Divider />
                            <Typography
                                className={props.classes.description}
                                gutterBottom
                                variant="body1"
                                component="p"
                                align="justify"
                            >
                                {props.description}
                            </Typography>
                            <Box fontStyle="italic">
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                >
                                    Click for an example
                                </Typography>
                            </Box>
                        </Box>
                    </CardContent>
                </CardActionArea>
            </Link>
        </DarkCard>
    )
);

// TODO make button text secondary

export default ServiceCard;
