import { Theme } from "../../theme/theme";
import { Skeleton } from "@material-ui/lab";
import React from "react";
import LazyLoad from "react-lazyload";
import { PropsWithStyles } from "../../theme/styleTypes";
import { Box, createStyles, withStyles } from "@material-ui/core";

const videoSkeletonStyles = (theme: Theme) =>
    createStyles({
        root: {
            height: "100%",
        },
    });

const VideoSkeleton = withStyles(
    videoSkeletonStyles
)(({ classes }: PropsWithStyles) => (
    <Skeleton variant="rect" className={classes.root} />
));

const lazyVideoStyles = (theme: Theme) =>
    createStyles({
        root: {
            width: "100%",
            marginTop: "auto",
            marginBottom: "auto",
            position: "relative",
            paddingBottom: "56.25%",
            height: 0,
            "& iframe, .lazyload-wrapper": {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                borderRadius: "4px",
            },
        },
    });

export interface VideoProps {
    videoId: string;
    title: string;
}

const LazyVideo = withStyles(lazyVideoStyles)(
    ({ videoId, title, classes }: PropsWithStyles<VideoProps>) => (
        <Box className={classes.root}>
            <LazyLoad once={true} offset={500} placeholder={<VideoSkeleton />}>
                <iframe
                    src={`https://www.youtube.com/embed/${videoId}?rel=0`}
                    frameBorder="0"
                    allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={title}
                />
            </LazyLoad>
        </Box>
    )
);

export { LazyVideo };
