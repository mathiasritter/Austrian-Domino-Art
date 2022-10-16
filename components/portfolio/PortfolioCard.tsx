import React, { useEffect } from "react";
import Image from "next/future/image";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import Link from "next/link";
import { Theme } from "../../theme/theme";
import { fetchProject } from "./portfolioSlice";
import { urlFor } from "../../lib/sanity";
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

    const dispatch = useDispatch();

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
                    sm: {
                        display: "none",
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
                sx={{
                    width: "100%",
                    height: "100%",
                    flexGrow: 1,
                    xs: {
                        display: "flex",
                    },
                }}
            >
                <Box
                    sx={(theme) => ({
                        position: "relative",
                        [theme.breakpoints.down("xs")]: {
                            width: "40%",
                        },
                        [theme.breakpoints.up("sm")]: {
                            width: "100%",
                            paddingBottom: "66.66%",
                        },
                    })}
                >
                    <Image
                        src={
                            project
                                ? urlFor(project.thumbnail).url()
                                : undefined
                        }
                        alt={`Thumbnail for ${project?.title}`}
                        fill
                    />
                </Box>
                <Box
                    sx={{
                        padding: 2,
                        xs: {
                            display: "flex",
                            alignItems: "center",
                            width: "60%",
                            minHeight: "98px",
                        },
                        sm: {
                            paddingTop: 0,
                        },
                    }}
                >
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
