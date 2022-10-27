import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { ButtonBack, ButtonNext, CloseButton } from "./ProjectCarouselButton";
import { CarouselProvider, Slide, Slider } from "pure-react-carousel";
import { Box } from "@mui/material";

interface CarouselProps {
    items: JSX.Element[];
    handleClose: () => void;
    initialImage: number;
}

const ProjectImageCarousel: React.FC<CarouselProps> = ({
    items,
    handleClose,
    initialImage,
}) => (
    <Box
        sx={{
            position: "absolute",
            width: "100%",
            top: "50%",
            transform: "translateY(-50%)",
            bgcolor: "background.default",
        }}
    >
        <CarouselProvider
            currentSlide={initialImage}
            naturalSlideWidth={1}
            naturalSlideHeight={1}
            totalSlides={items.length}
            isIntrinsicHeight={true}
        >
            <CloseButton onClick={handleClose} />
            <ButtonBack Icon={KeyboardArrowLeftIcon} />
            <ButtonNext Icon={KeyboardArrowRightIcon} />
            <Slider>
                {items.map((item, index) => (
                    <Slide index={index} key={index}>
                        <Box
                            key={index}
                            sx={{
                                position: "relative",
                                display: "flex",
                                height: "100%",
                                maxHeight: "100vh",
                                img: {
                                    objectFit: "contain",
                                },
                            }}
                        >
                            {item}
                        </Box>
                    </Slide>
                ))}
            </Slider>
        </CarouselProvider>
    </Box>
);

export { ProjectImageCarousel };
