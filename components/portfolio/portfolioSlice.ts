import {
    getProjectByNumber,
    getProjectBySlug,
    getProjectImages,
} from "./portfolioApi";
import { Project, ProjectImages } from "../project/ProjectModel";
import {
    Action,
    ActionReducerMapBuilder,
    AnyAction,
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

const isProjectAction = (
    action: AnyAction
): action is PayloadAction<Project> => {
    return [
        fetchProjectByNumber.fulfilled.type,
        fetchProjectBySlug.fulfilled.type,
    ].includes(action.type);
};

const isRejectedAction = (action: AnyAction): action is ErrorAction => {
    return [
        fetchProjectByNumber.rejected.type,
        fetchProjectBySlug.rejected.type,
        fetchProjectImages.rejected.type,
    ].includes(action.type);
};

const logRejection = (state: Draft<PortfolioState>, action: ErrorAction) => {
    console.error(action.error);
};

const fetchProjectByNumber = createAsyncThunk(
    "portfolio/fetchProjectByNumber",
    ({ baseUrl, projectNumber }: { baseUrl: string; projectNumber: number }) =>
        getProjectByNumber(baseUrl, projectNumber)
);

const fetchProjectBySlug = createAsyncThunk(
    "portfolio/fetchProjectBySlug",
    ({ baseUrl, slug }: { baseUrl: string; slug: string }) =>
        getProjectBySlug(baseUrl, slug)
);

const fetchProjectImages = createAsyncThunk(
    "portfolio/fetchProjectImages",
    ({ baseUrl, slug }: { baseUrl: string; slug: string }) =>
        getProjectImages(baseUrl, slug)
);

interface PortfolioState {
    page: number;
    total: number;
    projects: { [slug: string]: Project };
    order: string[];
}

const initialPortfolioState: PortfolioState = {
    page: 1,
    total: 0,
    projects: {},
    order: [],
};

const mergePortfolioStates = (
    current: PortfolioState,
    preloaded: PortfolioState
): PortfolioState => {
    return {
        page: current.page,
        total: Math.max(preloaded.total, current.total),
        projects: Object.assign({}, preloaded.projects, current.projects),
        order: union(current.order, preloaded.order),
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
            action: PayloadAction<Project[]>
        ) => {
            const projects = action.payload;
            for (const project of projects) {
                state.projects[project.slug] = project;
                state.order[project.number] = project.slug;
            }
        },
    },
    extraReducers: (builder: ActionReducerMapBuilder<PortfolioState>) => {
        builder.addCase(
            fetchProjectImages.fulfilled,
            (
                state: Draft<PortfolioState>,
                action: PayloadAction<ProjectImages>
            ) => {
                const { slug, images } = action.payload;
                state.projects[slug].images = images;
            }
        );

        builder.addMatcher(
            isProjectAction,
            (state: Draft<PortfolioState>, action: PayloadAction<Project>) => {
                const project = action.payload;
                state.projects[project.slug] = project;
                state.order[project.number] = project.slug;
            }
        );

        builder.addMatcher(isRejectedAction, logRejection);
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
    fetchProjectImages,
    fetchProjectBySlug,
    fetchProjectByNumber,
    mergePortfolioStates,
};
