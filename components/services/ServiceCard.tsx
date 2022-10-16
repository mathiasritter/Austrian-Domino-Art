import Link from "next/link";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ServiceIcon } from "./ServiceIcon";
import { DarkCard } from "./DarkCard";
import { OverridableComponent } from "@mui/types";
import {
    Box,
    CardActionArea,
    CardContent,
    Divider,
    SvgIconTypeMap,
    Typography,
} from "@mui/material";

interface Props {
    name: string;
    description: string;
    exampleSlug: string;
    icon: OverridableComponent<SvgIconTypeMap>;
    iconSize: number;
}

const ServiceCard: React.FC<Props> = (props) => (
    <DarkCard>
        <Link
            href={"/portfolio/[slug]"}
            as={`/portfolio/${props.exampleSlug}`}
            passHref={true}
        >
            <CardActionArea
                component="a"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                }}
            >
                <CardContent
                    sx={(theme) => ({
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
                    })}
                >
                    <ServiceIcon icon={props.icon} iconSize={props.iconSize} />
                    <Box
                        textAlign="center"
                        sx={(theme) => ({
                            [theme.breakpoints.only("sm")]: {
                                transform: "rotate(-90deg)",
                            },
                            [theme.breakpoints.down("xs")]: {
                                display: "none",
                            },
                        })}
                    >
                        <KeyboardArrowDownIcon
                            fontSize="large"
                            color="secondary"
                        />
                    </Box>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <Typography
                            variant="h4"
                            component="h2"
                            sx={(theme) => ({
                                [theme.breakpoints.up("md")]: {
                                    textAlign: "center",
                                },
                                [theme.breakpoints.down("xs")]: {
                                    textAlign: "center",
                                },
                                paddingBottom: theme.spacing(0.5),
                            })}
                        >
                            {props.name}
                        </Typography>
                        <Divider />
                        <Typography
                            gutterBottom
                            variant="body1"
                            component="p"
                            align="justify"
                            sx={{
                                flexGrow: 1,
                                paddingTop: 1,
                                hyphens: "auto",
                            }}
                        >
                            {props.description}
                        </Typography>
                        <Box fontStyle="italic">
                            <Typography variant="body2" color="textSecondary">
                                Click for an example
                            </Typography>
                        </Box>
                    </Box>
                </CardContent>
            </CardActionArea>
        </Link>
    </DarkCard>
);

export default ServiceCard;
