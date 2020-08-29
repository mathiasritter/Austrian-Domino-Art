import {
    Box,
    SvgIcon,
    SvgIconTypeMap,
    useMediaQuery,
    useTheme,
} from "@material-ui/core";
import React, { useMemo } from "react";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import { Theme } from "../../theme/theme";

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

    const outerIconSize = useMemo(() => (atLeastMd ? 200 : 200 / 1.5), [
        atLeastMd,
    ]);

    const innerIconSize = useMemo(
        () => (atLeastMd ? props.iconSize : props.iconSize / 1.5),
        [atLeastMd]
    );

    return (
        <Box textAlign="center" position="relative" className={props.className}>
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
