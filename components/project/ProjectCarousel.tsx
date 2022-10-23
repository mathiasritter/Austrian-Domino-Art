import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { ButtonBack, ButtonNext, CloseButton } from "./ProjectCarouselButton";
import { CarouselProvider, Slide, Slider } from "pure-react-carousel";
import { Box, styled } from "@mui/material";

interface CarouselProps {
    items: JSX.Element[];
    handleClose: () => void;
    initialImage: number;
}

const StyledCarouselProvider = styled(CarouselProvider)(({ theme }) => ({
    // display: "flex",
    // flexGrow: 1,
}));

const StyledSlider = styled(Slider)({
    // flexGrow: 1,
});
const StyledSlide = styled(Slide)({});

const StyledButtonBack = styled(ButtonBack)();

const StyledButtonNext = styled(ButtonNext)();

const ProjectImageCarousel: React.FC<CarouselProps> = ({
    items,
    handleClose,
    initialImage,
}) => (
    <Box
        sx={{
            position: "absolute",
            width: "100%",
            display: "table",
            top: "50%",
            transform: "translateY(-50%)",
            bgcolor: "background.default",
        }}
    >
        <StyledCarouselProvider
            currentSlide={initialImage}
            naturalSlideWidth={1}
            naturalSlideHeight={1}
            totalSlides={items.length}
            isIntrinsicHeight={true}
        >
            <CloseButton onClick={handleClose} />
            <StyledButtonBack Icon={KeyboardArrowLeftIcon} />
            <StyledSlider>
                {items.map((item, index) => (
                    <StyledSlide index={index} key={index}>
                        <Box
                            key={index}
                            sx={{
                                position: "relative",
                                // height: "100%",
                                // width: "100%",
                                paddingBottom: "min(75%, 100vh)",
                                img: {
                                    objectFit: "contain",
                                },
                            }}
                        >
                            {item}
                        </Box>
                    </StyledSlide>
                ))}
            </StyledSlider>
            <StyledButtonNext Icon={KeyboardArrowRightIcon} />
        </StyledCarouselProvider>
    </Box>
);

export { ProjectImageCarousel };
