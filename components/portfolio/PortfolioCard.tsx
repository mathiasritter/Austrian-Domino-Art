import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import Link from "next/link";
import {
    Box,
    Card,
    CardActionArea,
    createStyles,
    Divider,
    Typography,
    useMediaQuery,
    withStyles,
} from "@material-ui/core";
import { Theme } from "../../theme/theme";
import { LazyPortfolioImage } from "./LazyPortfolioImage";
import { PropsWithStyles } from "../../theme/styleTypes";
import { Skeleton } from "@material-ui/lab";
import { fetchProject } from "./portfolioSlice";
import { urlFor } from "../../lib/sanity";

interface Props {
    projectIndex: number;
}

const projectCardStyles = (theme: Theme) =>
    createStyles({
        actionArea: {
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
        },
        titleXS: {
            margin: "0",
            fontWeight: 500,
            textAlign: "center",
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(0.5),
        },
        titleSM: {
            padding: theme.spacing(2),
            paddingBottom: 0,
            marginBottom: "0.35em",
            [theme.breakpoints.down("xs")]: {
                display: "none",
            },
        },
        titleXSContainer: {
            width: "100%",
            [theme.breakpoints.up("sm")]: {
                display: "none",
            },
        },
        bottomContainer: {
            width: "100%",
            height: "100%",
            flexGrow: 1,
            [theme.breakpoints.down("xs")]: {
                display: "flex",
            },
        },
        summaryContainer: {
            padding: theme.spacing(2),
            [theme.breakpoints.down("xs")]: {
                display: "flex",
                alignItems: "center",
                width: "60%",
                minHeight: "98px",
            },
            [theme.breakpoints.up("sm")]: {
                paddingTop: 0,
            },
        },
        summary: {
            width: "100%",
            hyphens: "auto",
            "-webkit-hyphens": "auto",
            "-ms-hyphens": "auto",
        },
    });

const PortfolioCard = withStyles(projectCardStyles)(
    ({
        projectIndex,
        classes,
    }: PropsWithStyles<Props, typeof projectCardStyles>) => {
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
            <CardActionArea className={classes.actionArea} component="a">
                <Box className={classes.titleXSContainer}>
                    <Typography
                        variant="body1"
                        component="h2"
                        color="textPrimary"
                        align="center"
                        className={classes.titleXS}
                    >
                        {project ? project.title : <Skeleton />}
                    </Typography>
                    <Divider />
                </Box>
                <Box className={classes.bottomContainer}>
                    <LazyPortfolioImage
                        src={
                            project
                                ? urlFor(project.thumbnail).url()
                                : undefined
                        }
                        alt={`Thumbnail for ${project?.title}`}
                    />
                    <Typography
                        variant={"h5"}
                        component="h2"
                        color="textPrimary"
                        className={classes.titleSM}
                    >
                        {project ? project.title : <Skeleton />}
                    </Typography>
                    <Box className={classes.summaryContainer}>
                        <Typography
                            variant={atLeastSm ? "body1" : "body2"}
                            component="p"
                            className={classes.summary}
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
    }
);

export default PortfolioCard;
