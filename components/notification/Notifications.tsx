import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import React from "react";
import { useSelector } from "react-redux";
import { Notification } from "./Notification";

const notificationSelector = createSelector(
    (state: RootState) => state.notification.items,
    (notifications) => Object.keys(notifications)
);

const Notifications: React.FC = () => {
    const notifications = useSelector(notificationSelector);

    return (
        <>
            {notifications.map((id) => (
                <Notification id={id} key={id} />
            ))}
        </>
    );
};

export { Notifications };
