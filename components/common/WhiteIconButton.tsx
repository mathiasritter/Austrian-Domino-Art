import React from "react";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";

const WhiteIconButton: React.FC<IconButtonProps> = ({
    sx,
    children,
    ...buttonProps
}) => (
    <IconButton sx={{ ...sx, color: "white" }} {...buttonProps}>
        {children}
    </IconButton>
);

export { WhiteIconButton };
