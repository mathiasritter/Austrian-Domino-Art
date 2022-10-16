import React, { PropsWithChildren } from "react";
import { SectionWrapper } from "./SectionWrapper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

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
        <SectionWrapper containerTag={MobileSectionsContainer} items={items}>
            {items.map((item: string) => (
                <ListItem key={item} button onClick={handleClick}>
                    <ListItemText primary={item} />
                </ListItem>
            ))}
        </SectionWrapper>
    );
};

export { MobileSections };
