import React from "react";
import Image from "next/future/image";
import Link from "next/link";
import { Theme } from "../../theme/theme";
import {
    Box,
    Card,
    CardActionArea,
    Divider,
    Skeleton,
    Typography,
    useMediaQuery,
} from "@mui/material";
import { PortfolioProject } from "../../lib/types";
import { useQuery } from "@tanstack/react-query";

interface Props {
    projectIndex: number;
    initialProject?: PortfolioProject;
}

const PortfolioCard: React.FC<Props> = ({ projectIndex, initialProject }) => {
    const { data: project } = useQuery<
        PortfolioProject,
        unknown,
        PortfolioProject,
        [string, number]
    >({
        queryKey: ["projects", projectIndex],
        queryFn: async ({ queryKey: [_, index] }) => {
            const result = await fetch(`/api/portfolio/${index}`);
            return result.json();
        },
        initialData: initialProject,
    });

    const atLeastSm = useMediaQuery((theme: Theme) =>
        theme.breakpoints.up("sm")
    );

    const actionArea = (
        <CardActionArea
            sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "stretch",
            }}
            component="a"
        >
            <Box
                sx={{
                    width: "100%",
                    display: {
                        sm: "none",
                    },
                }}
            >
                <Typography
                    variant="body1"
                    component="h2"
                    color="textPrimary"
                    align="center"
                    sx={{
                        margin: "0",
                        fontWeight: 500,
                        textAlign: "center",
                        paddingTop: 1,
                        paddingBottom: 0.5,
                    }}
                >
                    {project ? project.title : <Skeleton />}
                </Typography>
                <Divider />
            </Box>
            <Box
                sx={(theme) => ({
                    width: "100%",
                    height: "100%",
                    flexGrow: 1,
                    [theme.breakpoints.down("sm")]: {
                        display: "flex",
                    },
                })}
            >
                <Box
                    sx={(theme) => ({
                        position: "relative",
                        [theme.breakpoints.up("sm")]: {
                            width: "100%",
                            paddingBottom: "66.66%",
                        },
                        [theme.breakpoints.down("sm")]: {
                            flex: "0 0 40%",
                            minHeight: "100px",
                        },
                    })}
                >
                    {project ? (
                        <Image
                            {...project.thumbnail}
                            sizes="50vw"
                            placeholder="blur"
                            style={{
                                position: "absolute",
                                objectFit: "cover",
                                maxWidth: "100%",
                                maxHeight: "100%",
                            }}
                        />
                    ) : (
                        <Skeleton
                            variant="rectangular"
                            sx={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                            }}
                        />
                    )}
                </Box>
                <Box
                    sx={(theme) => ({
                        padding: 2,
                        [theme.breakpoints.down("sm")]: {
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            padding: 1,
                            paddingLeft: 2,
                            width: "100%",
                        },
                    })}
                >
                    <Typography
                        component="h2"
                        variant="h5"
                        color="textPrimary"
                        paddingBottom={1}
                        sx={{
                            display: {
                                sm: "block",
                                xs: "none",
                            },
                        }}
                    >
                        {project ? project.title : <Skeleton />}
                    </Typography>
                    <Typography
                        variant={atLeastSm ? "body1" : "body2"}
                        component="p"
                        sx={{
                            width: "100%",
                            hyphens: "auto",
                        }}
                    >
                        {project ? (
                            project.summary
                        ) : (
                            <>
                                <Skeleton />
                                <Skeleton />
                            </>
                        )}
                    </Typography>
                </Box>
            </Box>
        </CardActionArea>
    );

    return (
        <Card>
            {project ? (
                <Link
                    href={"/portfolio/[slug]"}
                    as={`/portfolio/${project.slug}`}
                    passHref={true}
                >
                    {actionArea}
                </Link>
            ) : (
                actionArea
            )}
        </Card>
    );
};

export default PortfolioCard;
