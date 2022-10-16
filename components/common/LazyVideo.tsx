import React from "react";
import LazyLoad from "react-lazyload";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

const VideoSkeleton: React.FC = () => (
    <Skeleton sx={{ height: "100%" }} variant="rectangular" />
);

export interface VideoProps {
    videoId: string;
    title: string;
}

const LazyVideo: React.FC<VideoProps> = ({ videoId, title }) => (
    <Box
        sx={{
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
        }}
    >
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
);

export { LazyVideo };
