import React from "react";
import { createStyles, Modal, withStyles } from "@material-ui/core";
import { Theme } from "../../theme/theme";
import { PropsWithStyles } from "../../theme/styleTypes";
import { ProjectImageCarousel } from "./ProjectCarousel";

interface ProjectImageListProps {
    imageElements: JSX.Element[];
    handleClose: () => void;
    open: boolean;
    initialImage: number;
}

const projectImageModalStyles = (theme: Theme) =>
    createStyles({
        root: {
            touchAction: "none",
        },
    });

const ProjectCarouselModal = withStyles(projectImageModalStyles)(
    ({
        imageElements,
        open,
        handleClose,
        initialImage,
        classes,
    }: PropsWithStyles<ProjectImageListProps>) => (
        <Modal
            className={classes.root}
            open={open}
            onClose={handleClose}
            aria-label="Photo gallery"
        >
            <ProjectImageCarousel
                items={imageElements}
                handleClose={handleClose}
                initialImage={initialImage}
            />
        </Modal>
    )
);

export { ProjectCarouselModal };
