import React, { useEffect } from "react";
import Image from "next/future/image";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store";
import Link from "next/link";
import { Theme } from "../../theme/theme";
import { fetchProject } from "./portfolioSlice";
import {
    Box,
    Card,
    CardActionArea,
    Divider,
    Skeleton,
    Typography,
    useMediaQuery,
} from "@mui/material";

interface Props {
    projectIndex: number;
}

const PortfolioCard: React.FC<Props> = ({ projectIndex }) => {
    const project = useSelector(
        (state: RootState) => state.portfolio.projects[projectIndex]
    );

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!project) {
            dispatch(fetchProject(projectIndex));
        }
    }, [project, projectIndex]);

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
                        [theme.breakpoints.down("sm")]: {
                            flex: "0 0 40%",
                        },
                        [theme.breakpoints.up("sm")]: {
                            width: "100%",
                            paddingBottom: "66.66%",
                        },
                    })}
                >
                    {project ? (
                        <Image
                            src={project.thumbnail}
                            alt={`Thumbnail for ${project.title}`}
                            fill
                            style={{
                                objectFit: "cover",
                            }}
                            placeholder="blur"
                            blurDataURL={project.thumbnailPreview}
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
                            padding: 1,
                            paddingLeft: 2,
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
