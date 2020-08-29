import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export interface BaseNotification {
    severity: "success" | "error";
    content: string;
}

export interface Notification extends BaseNotification {
    open: boolean;
}

interface NotificationState {
    items: { [id: string]: Notification };
}

const initialNotificationState: NotificationState = { items: {} };

const mergeNotificationStates = (
    current: NotificationState,
    preloaded: NotificationState
): NotificationState => {
    return {
        ...preloaded,
        ...current,
    };
};

const notificationSlice = createSlice({
    name: "notification",
    initialState: initialNotificationState,
    reducers: {
        addNotification: (
            state: Draft<NotificationState>,
            action: PayloadAction<BaseNotification>
        ) => {
            const notification = action.payload;

            if (notification.severity === "error") {
                console.error(notification.content);
            }

            const id = uuidv4();
            state.items[id] = {
                ...notification,
                open: true,
            };
        },
        closeNotification: (
            state: Draft<NotificationState>,
            action: PayloadAction<string>
        ) => {
            const id = action.payload;
            state.items[id].open = false;
        },
    },
});

const { addNotification, closeNotification } = notificationSlice.actions;
const notificationReducer = notificationSlice.reducer;

export {
    mergeNotificationStates,
    addNotification,
    closeNotification,
    notificationReducer,
};
