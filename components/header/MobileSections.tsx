import React, { PropsWithChildren } from "react";
import { SectionWrapper } from "./SectionWrapper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/material";

const MobileSectionsContainer = ({
    className,
    children,
}: PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>) => (
    <List component="nav" className={className}>
        {children}
    </List>
);

interface MobileSectionProps {
    closeDrawer: () => void;
    onClick: (event: React.SyntheticEvent) => void;
    items: string[];
}

const StyledSectionWrapper = styled(SectionWrapper)(({ theme }) => ({
    "& .active": {
        backgroundColor: "rgba(255, 255, 255, 0.08)",
    },
    "& div": {
        paddingRight: theme.spacing(2),
        paddingLeft: theme.spacing(2),
    },
}));

const MobileSections: React.FC<MobileSectionProps> = ({
    closeDrawer,
    onClick,
    items,
}) => {
    const handleClick = (event: React.SyntheticEvent) => {
        onClick(event);
        closeDrawer();
    };
    return (
        <StyledSectionWrapper
            containerTag={MobileSectionsContainer}
            items={items}
        >
            {items.map((item: string) => (
                <ListItem key={item} button onClick={handleClick}>
                    <ListItemText primary={item} />
                </ListItem>
            ))}
        </StyledSectionWrapper>
    );
};

export { MobileSections };
