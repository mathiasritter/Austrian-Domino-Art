import { Theme } from "../../theme/theme";
import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { setPage } from "./portfolioSlice";
import { useMediaQuery } from "@mui/material";

const usePaginatedProjects = () => {
    const total = useSelector((state: RootState) => state.portfolio.total);
    const page = useSelector((state: RootState) => state.portfolio.page);
    const dispatch = useDispatch();

    const dispatchSetPage = useCallback(
        (newPage: number) => dispatch(setPage(newPage)),
        [dispatch]
    );

    const atLeastLarge = useMediaQuery((theme: Theme) =>
        theme.breakpoints.up("lg")
    );

    const { cardsEachPage, pageCount } = useMemo(() => {
        const cardsEachPage = atLeastLarge ? 8 : 6;
        const pageCount = Math.max(Math.ceil(total / cardsEachPage), 1);
        if (page > pageCount) {
            dispatchSetPage(pageCount);
        }
        return {
            cardsEachPage,
            pageCount,
        };
    }, [total, atLeastLarge, dispatchSetPage, page]);

    const { minIndex, maxIndex } = useMemo(() => {
        const minIndex = (page - 1) * cardsEachPage;
        const maxIndex = Math.min(page * cardsEachPage, total);
        return { minIndex, maxIndex };
    }, [total, page, cardsEachPage]);

    return {
        page,
        pageCount,
        setPage: dispatchSetPage,
        minIndex,
        maxIndex,
    };
};

export { usePaginatedProjects };
