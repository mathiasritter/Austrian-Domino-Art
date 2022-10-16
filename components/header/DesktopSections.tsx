import React from "react";
import { SectionWrapper } from "./SectionWrapper";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material";

interface DesktopSectionProps {
    onClick: (event: React.SyntheticEvent) => void;
    items: string[];
}

const DesktopSectionWrapper = styled(SectionWrapper)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    height: "100%",
    "& .active": {
        color: "black",
    },
    "& div": {
        paddingRight: theme.spacing(1),
        paddingLeft: theme.spacing(1),
        cursor: "pointer",
        color: "white",
        "&:hover": {
            color: "black",
        },
    },
}));

const DesktopSections: React.FC<DesktopSectionProps> = ({
    onClick,
    items,
}) => (
    <DesktopSectionWrapper containerTag="nav" items={items}>
        {items.map((item: string) => (
            <Typography
                key={item}
                variant="h6"
                component="div"
                onClick={onClick}
            >
                {item}
            </Typography>
        ))}
    </DesktopSectionWrapper>
);

export { DesktopSections };
