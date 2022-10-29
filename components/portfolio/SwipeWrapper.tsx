import React, { PropsWithChildren, useCallback, useState } from "react";
import Swipe from "react-easy-swipe";

interface SwipeProps {
    page: number;
    pageCount: number;
    setPage: (newPage: number) => void;
}

const SwipeWrapper: React.FC<PropsWithChildren<SwipeProps>> = (
    props: PropsWithChildren<SwipeProps>
) => {
    const { page, pageCount, setPage } = props;

    const [isHorizontalSwipe, setHorizontalSwipe] = useState<boolean>(false);

    const handleSwipeLeft = useCallback((): void => {
        if (isHorizontalSwipe && page < pageCount) {
            setPage(page + 1);
        }
    }, [page, pageCount, setPage, isHorizontalSwipe]);

    const handleSwipeRight = useCallback((): void => {
        if (isHorizontalSwipe && page > 1) {
            setPage(page - 1);
        }
    }, [page, setPage, isHorizontalSwipe]);

    const handleSwipeMove = useCallback(
        (delta): boolean => {
            setHorizontalSwipe(Math.abs(delta.x) > Math.abs(delta.y));
            return isHorizontalSwipe;
        },
        [setHorizontalSwipe, isHorizontalSwipe]
    );


    return (
        <>
            {/* @ts-expect-error not updated for React 18 types */}
            <Swipe
                onSwipeLeft={handleSwipeLeft}
                onSwipeRight={handleSwipeRight}
                onSwipeMove={handleSwipeMove}
                tolerance={50}
                innerRef={undefined}
            >
                {props.children}
            </Swipe>
        </>
    );
};

export { SwipeWrapper };
