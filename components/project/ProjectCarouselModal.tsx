import React from "react";
import { ProjectImageCarousel } from "./ProjectCarousel";
import { Modal } from "@mui/material";

interface ProjectImageListProps {
    imageElements: JSX.Element[];
    handleClose: () => void;
    open: boolean;
    initialImage: number;
}

const ProjectCarouselModal: React.FC<ProjectImageListProps> = ({
    imageElements,
    open,
    handleClose,
    initialImage,
}) => (
    <Modal
        sx={{ touchAction: "none" }}
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
);

export { ProjectCarouselModal };
