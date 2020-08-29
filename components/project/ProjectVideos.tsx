import { Box, Card } from "@material-ui/core";
import React from "react";
import { Theme } from "../../theme/theme";
import { createDiv } from "../common/createDiv";
import { LazyVideo } from "../common/LazyVideo";

interface ProjectVideosProps {
    videos: string[];
    title: string;
}

const ProjectVideos: React.FC<ProjectVideosProps> = ({
    videos,
    title,
}: ProjectVideosProps) => {
    const oddNumberOfVideos = videos.length % 2 === 1;

    const videoCards = videos.map((video: string, index: number) => (
        <Card key={video}>
            <Box margin="auto" maxWidth="140vh">
                <LazyVideo
                    videoId={video}
                    title={`Video ${index + 1} of ${
                        videos.length
                    } for project ${title}`}
                />
            </Box>
        </Card>
    ));

    const firstVideo = oddNumberOfVideos ? videoCards.shift() : null;

    return (
        <>
            {firstVideo}
            {videoCards.length > 0 ? <VideoGrid>{videoCards}</VideoGrid> : null}
        </>
    );
};

const VideoGrid = createDiv((theme: Theme) => ({
    display: "grid",
    gridGap: theme.spacing(2),
    [theme.breakpoints.up("lg")]: {
        gridTemplateColumns: "repeat(2, 1fr)",
    },
    [theme.breakpoints.down("md")]: {
        gridTemplateColumns: "repeat(1, 1fr)",
    },
}));

export { ProjectVideos };
