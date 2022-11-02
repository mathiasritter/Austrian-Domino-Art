import React, { useMemo } from "react";
import { Theme } from "../../theme/theme";
import { OverridableComponent } from "@mui/types";
import { SvgIcon, SvgIconTypeMap, useMediaQuery } from "@mui/material";
import { Box, useTheme } from "@mui/system";

interface Props {
    icon: OverridableComponent<SvgIconTypeMap>;
    iconSize: number;
    className?: string;
}

const ServiceIcon = (props: Props) => {
    const theme = useTheme();

    const atLeastMd = useMediaQuery((theme: Theme) =>
        theme.breakpoints.up("md")
    );

    const outerIconSize = useMemo(
        () => (atLeastMd ? 200 : 200 / 1.5),
        [atLeastMd]
    );

    const innerIconSize = useMemo(
        () => (atLeastMd ? props.iconSize : props.iconSize / 1.5),
        [atLeastMd, props.iconSize]
    );

    return (
        <Box
            textAlign="center"
            position="relative"
            sx={(theme) => ({
                [theme.breakpoints.up("md")]: {
                    marginTop: theme.spacing(2),
                    marginBottom: theme.spacing(2),
                },
                [theme.breakpoints.only("sm")]: {
                    marginRight: theme.spacing(1),
                },
                [theme.breakpoints.down("xs")]: {
                    marginBottom: theme.spacing(1),
                },
            })}
        >
            <SvgIcon viewBox="0 0 100 100" style={{ fontSize: outerIconSize }}>
                <circle
                    cx="50"
                    cy="50"
                    r="48"
                    strokeWidth="4"
                    fill="none"
                    stroke={theme.palette.primary.main}
                />
            </SvgIcon>
            <props.icon
                style={{
                    fontSize: innerIconSize,
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    margin: "auto",
                    color: theme.palette.secondary.main,
                }}
            />
        </Box>
    );
};

export { ServiceIcon };
