import { useAppDispatch } from "../store";
import { useCallback } from "react";
import { AnyAction } from "redux";

const useAction = (
    action: AnyAction,
    deps: Array<any> = []
): (() => AnyAction) => {
    const dispatch = useAppDispatch();
    return useCallback(() => dispatch(action), [dispatch, ...deps]);
};

export { useAction };
