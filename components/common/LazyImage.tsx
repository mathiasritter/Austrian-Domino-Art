import { CSSProperties } from "@material-ui/core/styles/withStyles";
import { Skeleton } from "@material-ui/lab";
import React, { useCallback } from "react";
import LazyLoad from "react-lazyload";
import { PropsWithStyles } from "../../theme/styleTypes";
import { StyleRules } from "@material-ui/styles";

const ImagePlaceholder = React.forwardRef(
    (
        {
            classNameSkeleton,
            classNameImage,
            classNameWrapper,
        }: {
            classNameSkeleton?: string;
            classNameWrapper?: string;
            classNameImage?: string;
        },
        ref: React.Ref<HTMLDivElement>
    ) => (
        <div className={classNameWrapper} ref={ref}>
            <Skeleton
                variant="rect"
                className={`${classNameImage} ${classNameSkeleton}`}
            />
        </div>
    )
);

ImagePlaceholder.displayName = "ImagePlaceholder";

const baseImageStyles: CSSProperties = {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
};

export interface LazyImageProps {
    src?: string;
    alt?: string;
    className?: string;
}

const LazyImage = ({
    className,
    classes,
    src,
    alt,
}: PropsWithStyles<
    LazyImageProps,
    StyleRules<
        Record<string, unknown>,
        "image" | "root" | "skeleton" | "skeletonWrapper"
    >
>) => {
    const refPlaceholder = React.useRef<HTMLDivElement>();

    const removePlaceholder = useCallback(() => {
        refPlaceholder.current?.remove();
    }, [refPlaceholder.current]);

    return (
        <div className={`${classes.root} ${className ? className : ``}`}>
            <ImagePlaceholder
                classNameSkeleton={classes.skeleton}
                classNameWrapper={classes.skeletonWrapper}
                classNameImage={classes.image}
                ref={refPlaceholder}
            />
            <LazyLoad once={true} offset={500}>
                {src && alt ? (
                    <img
                        className={classes.image}
                        onLoad={removePlaceholder}
                        onError={removePlaceholder}
                        src={src}
                        alt={alt}
                    />
                ) : null}
            </LazyLoad>
        </div>
    );
};

export { LazyImage, baseImageStyles, ImagePlaceholder };
