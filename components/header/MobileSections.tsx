import React, { PropsWithChildren } from "react";
import { Theme } from "../../theme/theme";
import { SectionWrapper } from "./SectionWrapper";
import {
    createStyles,
    List,
    ListItem,
    ListItemText,
    withStyles,
} from "@material-ui/core";
import { PropsWithStyles } from "../../theme/styleTypes";

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

const mobileSectionStyles = (theme: Theme) =>
    createStyles({
        root: {
            "& .active": {
                backgroundColor: "rgba(255, 255, 255, 0.08)",
            },
            "& div": {
                paddingRight: theme.spacing(2),
                paddingLeft: theme.spacing(2),
            },
        },
    });

const MobileSections = withStyles(mobileSectionStyles)(
    ({
        classes,
        closeDrawer,
        onClick,
        items,
    }: PropsWithStyles<MobileSectionProps, typeof mobileSectionStyles>) => {
        const handleClick = (event: React.SyntheticEvent) => {
            onClick(event);
            closeDrawer();
        };
        return (
            <SectionWrapper
                classes={classes}
                containerTag={MobileSectionsContainer}
                items={items}
            >
                {items.map((item: string) => (
                    <ListItem key={item} button onClick={handleClick}>
                        <ListItemText primary={item} />
                    </ListItem>
                ))}
            </SectionWrapper>
        );
    }
);

export { MobileSections };
