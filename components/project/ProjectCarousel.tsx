import React from "react";
import { Box, createStyles, withStyles } from "@material-ui/core";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import { Theme } from "../../theme/theme";
import { PropsWithStyles } from "../../theme/styleTypes";
import {
    nextBackStylesMd,
    ButtonBack,
    ButtonNext,
    CloseButton,
} from "./ProjectCarouselButton";
import { CarouselProvider, Slide, Slider } from "pure-react-carousel";

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

const carouselStyles = (theme: Theme) =>
    createStyles({
        root: {
            top: "50%",
            transform: "translateY(-50%)",
            position: "absolute",
            backgroundColor: theme.palette.background.default,
        },
        carouselProvider: {
            display: "flex",
        },
        slider: {
            ...maxHeight(theme),
        },
        slide: {
            "& img": {
                ...maxHeight(theme),
            },
        },
        arrowPrev: {
            borderRadius: 0,
            [theme.breakpoints.down("md")]: {
                ...nextBackStylesMd,
                left: 0,
            },
        },
        arrowNext: {
            borderRadius: 0,
            [theme.breakpoints.down("md")]: {
                ...nextBackStylesMd,
                right: 0,
            },
        },
    });

const ProjectCarousel: React.FC<PropsWithStyles<
    CarouselProps,
    typeof carouselStyles
>> = ({
    items,
    handleClose,
    initialImage,
    classes,
}: PropsWithStyles<CarouselProps, typeof carouselStyles>) => (
    <div className={classes.root}>
        <Box display="flex" alignItems="stretch" flexDirection="column">
            <CloseButton onClick={handleClose} />
        </Box>
        <CarouselProvider
            className={classes.carouselProvider}
            currentSlide={initialImage}
            naturalSlideWidth={1}
            naturalSlideHeight={1}
            totalSlides={items.length}
            isIntrinsicHeight={true}
        >
            <ButtonBack
                className={classes.arrowPrev}
                Icon={KeyboardArrowLeftIcon}
            />
            <Slider className={classes.slider}>
                {items.map((item, index) => (
                    <Slide className={classes.slide} index={index} key={index}>
                        {item}
                    </Slide>
                ))}
            </Slider>
            <ButtonNext
                className={classes.arrowNext}
                Icon={KeyboardArrowRightIcon}
            />
        </CarouselProvider>
    </div>
);

const ProjectImageCarousel = withStyles(carouselStyles)(ProjectCarousel);

export { ProjectImageCarousel };
