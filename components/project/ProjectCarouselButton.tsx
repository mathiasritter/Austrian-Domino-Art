import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import { SvgIconTypeMap } from "@material-ui/core/SvgIcon/SvgIcon";
import React, { ComponentClass, PureComponent } from "react";
import {
    Button as MaterialButton,
    createStyles,
    withStyles,
} from "@material-ui/core";
import { CarouselStoreInterface, WithStore } from "pure-react-carousel";
import CloseIcon from "@material-ui/icons/Close";
import { Theme } from "../../theme/theme";
import { PropsWithStyles } from "../../theme/styleTypes";

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
            <MaterialButton
                className={this.props.className}
                disabled={!this.props.hasNext}
                onClick={this.handleClick}
                aria-label={this.props.ariaLabel}
            >
                <this.props.Icon />
            </MaterialButton>
        );
    }
};

const nextBackStylesMd = {
    position: "absolute",
    zIndex: 2,
    top: 0,
    bottom: 0,
    marginTop: "auto",
    marginBottom: "auto",
};

const ConnectedButtonNext = WithStore(Button, (state) => ({
    step: 1,
    currentSlide: state.currentSlide,
    hasNext: state.currentSlide < state.totalSlides - 1,
    ariaLabel: "next image",
})) as ComponentClass<OwnButtonProps>;

const ConnectedButtonBack = WithStore(Button, (state) => ({
    step: -1,
    currentSlide: state.currentSlide,
    hasNext: state.currentSlide > 0,
    ariaLabel: "previous image",
})) as ComponentClass<OwnButtonProps>;

interface CloseButtonProps {
    onClick: () => void;
}

const closeButtonStyles = (theme: Theme) =>
    createStyles({
        root: {
            borderRadius: 0,
            [theme.breakpoints.down("md")]: {
                position: "absolute",
                width: "100%",
                zIndex: 1,
                right: 0,
                top: 0,
                left: 0,
                marginLeft: "auto",
                marginRight: "auto",
            },
        },
    });

const CloseButton = withStyles(closeButtonStyles)(
    ({ classes, onClick }: PropsWithStyles<CloseButtonProps>) => (
        <MaterialButton
            className={classes.root}
            onClick={onClick}
            aria-label="close"
        >
            <CloseIcon />
        </MaterialButton>
    )
);

export {
    ConnectedButtonNext as ButtonNext,
    ConnectedButtonBack as ButtonBack,
    CloseButton,
    nextBackStylesMd,
};
