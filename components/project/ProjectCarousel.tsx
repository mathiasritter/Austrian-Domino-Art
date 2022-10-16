import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Theme } from "../../theme/theme";
import {
    nextBackStylesMd,
    ButtonBack,
    ButtonNext,
    CloseButton,
} from "./ProjectCarouselButton";
import { CarouselProvider, Slide, Slider } from "pure-react-carousel";
import { Box, styled } from "@mui/material";

interface CarouselProps {
    items: JSX.Element[];
    handleClose: () => void;
    initialImage: number;
}

const maxHeight = (theme: Theme) => ({
    [theme.breakpoints.up("lg")]: {
        maxHeight: "calc(90vh - 40px)",
    },
    [theme.breakpoints.down("md")]: {
        maxHeight: "100vh",
    },
});

const StyledCarouselProvider = styled(CarouselProvider)({
    display: "flex",
});

const StyledSlider = styled(Slider)(({ theme }) => maxHeight(theme));
const StyledSlide = styled(Slide)(({ theme }) => ({
    "& img": {
        ...maxHeight(theme),
    },
}));

const StyledButtonBack = styled(ButtonBack)(({ theme }) => ({
    borderRadius: 0,
    [theme.breakpoints.down("md")]: {
        ...nextBackStylesMd,
        left: 0,
    },
}));

const StyledButtonNext = styled(ButtonNext)(({ theme }) => ({
    borderRadius: 0,
    [theme.breakpoints.down("md")]: {
        ...nextBackStylesMd,
        right: 0,
    },
}));

const ProjectImageCarousel: React.FC<CarouselProps> = ({
    items,
    handleClose,
    initialImage,
}) => (
    <Box
        sx={{
            top: "50%",
            transform: "translateY(-50%)",
            position: "absolute",
            backgroundColor: "palette.background.default",
        }}
    >
        <Box display="flex" alignItems="stretch" flexDirection="column">
            <CloseButton onClick={handleClose} />
        </Box>
        <StyledCarouselProvider
            currentSlide={initialImage}
            naturalSlideWidth={1}
            naturalSlideHeight={1}
            totalSlides={items.length}
            isIntrinsicHeight={true}
        >
            <StyledButtonBack Icon={KeyboardArrowLeftIcon} />
            <StyledSlider>
                {items.map((item, index) => (
                    <StyledSlide index={index} key={index}>
                        {item}
                    </StyledSlide>
                ))}
            </StyledSlider>
            <StyledButtonNext Icon={KeyboardArrowRightIcon} />
        </StyledCarouselProvider>
    </Box>
);

export { ProjectImageCarousel };
