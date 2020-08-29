import React, { useCallback, useMemo, useState } from "react";
import { Box, Card, createStyles, withStyles } from "@material-ui/core";
import { Theme } from "../../theme/theme";
import { PropsWithStyles } from "../../theme/styleTypes";
import { createDiv } from "../common/createDiv";
import { LazyProjectImage } from "./LazyProjectImage";
import { ProjectCarouselModal } from "./ProjectCarouselModal";
import { Skeleton } from "@material-ui/lab";

const imageListSkeletonStyles = (theme: Theme) =>
    createStyles({
        root: {
            paddingBottom: "66.66%",
        },
    });

const ImageListSkeleton = withStyles(
    imageListSkeletonStyles
)(({ classes }: PropsWithStyles) => (
    <Skeleton variant="rect" className={classes.root} />
));

interface ProjectImageListProps {
    images: string[] | null;
    title: string;
}

const imageListStyles = (theme: Theme) =>
    createStyles({
        root: {},
        card: {
            cursor: "pointer",
            display: "flex",
            width: "100%",
        },
        image: {
            objectFit: "contain",
            width: "100%",
            height: "100%",
        },
    });

const ProjectImageList = withStyles(imageListStyles)(
    ({
        images,
        title,
        classes,
    }: PropsWithStyles<ProjectImageListProps, typeof imageListStyles>) => {
        if (!images) {
            return <ImageListSkeleton />;
        }

        const [open, setOpen] = useState(false);
        const [initialImage, setInitialImage] = useState(0);

        const createHandleOpen = useCallback(
            (initialImage: number) => () => {
                setInitialImage(initialImage);
                setOpen(true);
            },
            [setOpen, setInitialImage]
        );

        const handleClose = useCallback(() => {
            setOpen(false);
        }, [setOpen]);

        const imageElements = useMemo(
            () =>
                images.map((image: string, index: number) => (
                    <LazyProjectImage
                        key={image}
                        src={image}
                        alt={`Image ${index + 1} of ${
                            images.length
                        } for project ${title}`}
                    />
                )),
            [images]
        );

        return (
            <>
                <ImageGrid>
                    {imageElements.map((element, index) => (
                        <Box
                            key={element.key}
                            display="flex"
                            alignItems="center"
                        >
                            <Card
                                className={classes.card}
                                onClick={createHandleOpen(index)}
                            >
                                {element}
                            </Card>
                        </Box>
                    ))}
                </ImageGrid>
                <ProjectCarouselModal
                    initialImage={initialImage}
                    open={open}
                    handleClose={handleClose}
                    imageElements={imageElements}
                />
            </>
        );
    }
);

export const ImageGrid = createDiv((theme: Theme) => ({
    display: "grid",
    gridGap: theme.spacing(1),

    [theme.breakpoints.up("lg")]: {
        gridTemplateColumns: "repeat(4, 1fr)",
    },
    [theme.breakpoints.only("md")]: {
        gridTemplateColumns: "repeat(3, 1fr)",
    },
    [theme.breakpoints.down("sm")]: {
        gridTemplateColumns: "repeat(2, 1fr)",
    },
}));

export { ProjectImageList };
