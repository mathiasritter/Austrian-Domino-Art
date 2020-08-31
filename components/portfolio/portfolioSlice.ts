import { getProjectByIndex } from "./portfolioApi";
import { IndexedProject, SanityBaseProject } from "../project/ProjectModel";
import {
    Action,
    ActionReducerMapBuilder,
    createAsyncThunk,
    createSlice,
    Draft,
    PayloadAction,
    SerializedError,
} from "@reduxjs/toolkit";
import union from "lodash.union";

interface ErrorAction extends Action<string> {
    error: SerializedError;
}

const fetchProject = createAsyncThunk(
    "portfolio/fetchProject",
    ({ baseUrl, index }: { baseUrl: string; index: number }) =>
        getProjectByIndex(baseUrl, index)
);

interface PortfolioState {
    page: number;
    total: number;
    projects: SanityBaseProject[];
}

const initialPortfolioState: PortfolioState = {
    page: 1,
    total: 0,
    projects: [],
};

const mergePortfolioStates = (
    current: PortfolioState,
    preloaded: PortfolioState
): PortfolioState => {
    return {
        page: current.page,
        total: Math.max(preloaded.total, current.total),
        projects: union(preloaded.projects, current.projects),
    };
};

const portfolioSlice = createSlice({
    name: "portfolio",
    initialState: initialPortfolioState,
    reducers: {
        setPage: (
            state: Draft<PortfolioState>,
            action: PayloadAction<number>
        ) => {
            state.page = action.payload;
        },

        setTotal: (
            state: Draft<PortfolioState>,
            action: PayloadAction<number>
        ) => {
            state.total = action.payload;
        },

        setProjects: (
            state: Draft<PortfolioState>,
            action: PayloadAction<SanityBaseProject[]>
        ) => {
            state.projects = action.payload;
        },
    },
    extraReducers: (builder: ActionReducerMapBuilder<PortfolioState>) => {
        builder.addCase(
            fetchProject.fulfilled,
            (
                state: Draft<PortfolioState>,
                action: PayloadAction<IndexedProject>
            ) => {
                const { index, ...project } = action.payload;
                state.projects[index] = project;
            }
        );

        builder.addCase(
            fetchProject.rejected,
            (state: Draft<PortfolioState>, action: ErrorAction) => {
                console.error(action.error);
            }
        );
    },
});

const { setPage, setTotal, setProjects } = portfolioSlice.actions;
const portfolioReducer = portfolioSlice.reducer;


export {
    initialPortfolioState,
    portfolioReducer,
    setPage,
    setTotal,
    setProjects,
    fetchProject,
    mergePortfolioStates,
};
