import React, { useCallback, useMemo, useState } from "react";
import Image from "next/future/image";
import { ProjectCarouselModal } from "./ProjectCarouselModal";
import { Card, styled, Box } from "@mui/material";
import { ImageProps } from "../../lib/types";

interface ProjectImageListProps {
    images: ImageProps[] | null;
    title: string;
}

const ProjectImageList: React.FC<ProjectImageListProps> = ({
    images,
    title,
}) => {
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
            images.map((image) => (
                <Image
                    {...image}
                    key={image.alt}
                    placeholder="blur"
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                />
            )),
        [images]
    );

    return (
        <>
            <ImageGrid>
                {imageElements.map((element, index) => (
                    <Box key={element.key}>
                        <Card
                            onClick={createHandleOpen(index)}
                            sx={{
                                display: "flex",
                                position: "relative",
                                top: "50%",
                                transform: "translateY(-50%)",
                                cursor: "pointer",
                            }}
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
};

export const ImageGrid = styled("div")(({ theme }) => ({
    display: "grid",
    gridGap: theme.spacing(1),

    [theme.breakpoints.up("lg")]: {
        gridTemplateColumns: "repeat(4, 1fr)",
    },
    [theme.breakpoints.only("md")]: {
        gridTemplateColumns: "repeat(3, 1fr)",
    },
    [theme.breakpoints.down("md")]: {
        gridTemplateColumns: "repeat(2, 1fr)",
    },
}));

export { ProjectImageList };
