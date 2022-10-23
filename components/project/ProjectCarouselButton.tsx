import React, { ComponentClass, PureComponent } from "react";
import { Button as MaterialButton, IconButton, styled } from "@mui/material";
import { CarouselStoreInterface, WithStore } from "pure-react-carousel";
import CloseIcon from "@mui/icons-material/Close";
import { OverridableComponent } from "@mui/types";
import { SvgIconTypeMap } from "@mui/material";

interface OwnButtonProps {
    Icon: OverridableComponent<SvgIconTypeMap>;
    className?: string;
}

interface StateButtonProps {
    step: 1 | -1;
    currentSlide: number;
    hasNext: boolean;
    ariaLabel: string;
    carouselStore: CarouselStoreInterface;
}

type ButtonProps = OwnButtonProps & StateButtonProps;

const Button = class Button extends PureComponent<ButtonProps> {
    constructor(props: ButtonProps) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    private handleClick(): void {
        const { currentSlide, step, carouselStore } = this.props;
        const nextSlide = currentSlide + step;
        carouselStore.setStoreState({
            currentSlide: nextSlide,
        });
    }

    public render(): JSX.Element {
        return (
            <IconButton
                className={this.props.className}
                disabled={!this.props.hasNext}
                onClick={this.handleClick}
                aria-label={this.props.ariaLabel}
                color="primary"
                sx={{
                    position: "absolute",
                    zIndex: 2,
                    top: "50%",
                    transform: "translateY(-50%)",
                    backdropFilter: "blur(10px)",
                }}
                size="large"
            >
                <this.props.Icon />
            </IconButton>
        );
    }
};

const ButtonNext = styled(Button)(({ theme }) => ({
    right: theme.spacing(1),
}));

const ButtonBack = styled(Button)(({ theme }) => ({
    left: theme.spacing(1),
}));

const ConnectedButtonNext = WithStore(ButtonNext, (state) => ({
    step: 1,
    currentSlide: state.currentSlide,
    hasNext: state.currentSlide < state.totalSlides - 1,
    ariaLabel: "next image",
})) as ComponentClass<OwnButtonProps>;

const ConnectedButtonBack = WithStore(ButtonBack, (state) => ({
    step: -1,
    currentSlide: state.currentSlide,
    hasNext: state.currentSlide > 0,
    ariaLabel: "previous image",
})) as ComponentClass<OwnButtonProps>;

interface CloseButtonProps {
    onClick: () => void;
}

const CloseButton: React.FC<CloseButtonProps> = ({ onClick }) => (
    <IconButton
        sx={(theme) => ({
            position: "absolute",
            zIndex: 1,
            right: theme.spacing(1),
            top: theme.spacing(1),
            backdropFilter: "blur(10px)",
        })}
        color="primary"
        onClick={onClick}
        aria-label="close"
        size="large"
    >
        <CloseIcon />
    </IconButton>
);

export {
    ConnectedButtonNext as ButtonNext,
    ConnectedButtonBack as ButtonBack,
    CloseButton,
};
