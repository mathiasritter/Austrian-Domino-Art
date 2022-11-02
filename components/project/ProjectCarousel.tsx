import React, { useCallback, useContext, useEffect } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { ButtonBack, ButtonNext, CloseButton } from "./ProjectCarouselButton";
import {
    CarouselContext,
    CarouselProvider,
    Slide,
    Slider,
} from "pure-react-carousel";
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
            left: "50%",
            transform: "translate(-50%, -50%)",
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
            <InnerCarousel items={items} handleClose={handleClose} />
        </CarouselProvider>
    </Box>
);

type InnerCarouselProps = Omit<CarouselProps, "initialImage">;

const InnerCarousel: React.FC<InnerCarouselProps> = ({
    items,
    handleClose,
}) => {
    const carouselContext = useContext(CarouselContext);

    const escFunction = useCallback(
        (event) => {
            if (event.key === "Escape") {
                handleClose();
                return;
            }

            const { currentSlide, totalSlides } = carouselContext.state;

            if (event.key === "ArrowRight" && currentSlide < totalSlides - 1) {
                carouselContext.setStoreState({
                    currentSlide: carouselContext.state.currentSlide + 1,
                });
                return;
            }

            if (event.key === "ArrowLeft" && currentSlide > 0) {
                carouselContext.setStoreState({
                    currentSlide: carouselContext.state.currentSlide - 1,
                });
                return;
            }
        },
        [carouselContext, handleClose]
    );

    useEffect(() => {
        document.addEventListener("keydown", escFunction);

        return () => {
            document.removeEventListener("keydown", escFunction);
        };
    }, [escFunction]);

    return (
        <>
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
        </>
    );
};

export { ProjectImageCarousel };
