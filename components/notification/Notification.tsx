import { RootState } from "../../store";
import { createSelector } from "@reduxjs/toolkit";
import React from "react";
import { useSelector } from "react-redux";
import { useAction } from "../../hooks/useAction";
import { closeNotification } from "./notificationSlice";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

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
