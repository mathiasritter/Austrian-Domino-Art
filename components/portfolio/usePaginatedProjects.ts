import { Theme } from "../../theme/theme";
import { useMemo, useState } from "react";
import { useMediaQuery } from "@mui/material";

const usePaginatedProjects = (total: number) => {
    const [page, setPage] = useState(1);

    const atLeastLarge = useMediaQuery((theme: Theme) =>
        theme.breakpoints.up("lg")
    );

    const { cardsEachPage, pageCount } = useMemo(() => {
        const cardsEachPage = atLeastLarge ? 8 : 6;
        const pageCount = Math.max(Math.ceil(total / cardsEachPage), 1);
        if (page > pageCount) {
            setPage(pageCount);
        }
        return {
            cardsEachPage,
            pageCount,
        };
    }, [total, atLeastLarge, page]);

    const { minIndex, maxIndex } = useMemo(() => {
        const minIndex = (page - 1) * cardsEachPage;
        const maxIndex = Math.min(page * cardsEachPage, total);
        return { minIndex, maxIndex };
    }, [total, page, cardsEachPage]);

    return {
        page,
        pageCount,
        setPage,
        minIndex,
        maxIndex,
    };
};

export { usePaginatedProjects };
