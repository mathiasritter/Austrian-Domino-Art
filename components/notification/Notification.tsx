import { RootState } from "../../store";
import { createSelector } from "@reduxjs/toolkit";
import React from "react";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { useSelector } from "react-redux";
import { useAction } from "../../hooks/useAction";
import { closeNotification } from "./notificationSlice";

interface NotificationProps {
    id: string;
}

const createNotificationSelector = (id: string) =>
    createSelector(
        (state: RootState) => state.notification.items,
        (notifications) => notifications[id]
    );

const Notification: React.FC<NotificationProps> = ({
    id,
}: NotificationProps) => {
    const { open, content, severity } = useSelector(
        createNotificationSelector(id)
    );

    const handleClose = useAction(closeNotification(id), [id]);

    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={severity}>
                {content}
            </Alert>
        </Snackbar>
    );
};

export { Notification };
