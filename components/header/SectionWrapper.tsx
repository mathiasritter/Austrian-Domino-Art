import React, { PropsWithChildren, useMemo } from "react";
import Scrollspy from "react-scrollspy";
import { WithStyles } from "@material-ui/core";

interface SectionWrapperProps {
    containerTag: string | React.ComponentType;
    items: string[];
}

const SectionWrapper = ({
    items,
    containerTag,
    classes,
    children,
}: PropsWithChildren<SectionWrapperProps> & WithStyles<{ root }>) => {
    const offset = process.browser
        ? useMemo(() => -(window.innerWidth / 4) - 1, [window.innerWidth])
        : 0;

    const scrollSpyItems = useMemo(
        () => items.map((item) => item.toLowerCase()),
        [items]
    );

    return (
        <Scrollspy
            items={scrollSpyItems}
            className={classes.root}
            currentClassName="active"
            componentTag={containerTag}
            offset={offset}
        >
            {children}
        </Scrollspy>
    );
};

export { SectionWrapper };
