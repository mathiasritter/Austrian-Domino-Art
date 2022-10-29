import React, { PropsWithChildren, useMemo } from "react";
import Scrollspy from "react-scrollspy";

interface SectionWrapperProps {
    containerTag: string | React.ComponentType;
    items: string[];
    className?: string;
}

const SectionWrapper: React.FC<PropsWithChildren<SectionWrapperProps>> = ({
    items,
    containerTag,
    children,
    className,
}) => {
    const offset = process.browser
        // eslint-disable-next-line
        ? useMemo(() => -(window.innerWidth / 4) - 1, [window.innerWidth])
        : 0;

    const scrollSpyItems = useMemo(
        () => items.map((item) => item.toLowerCase()),
        [items]
    );

    return (
        <Scrollspy
            items={scrollSpyItems}
            currentClassName="active"
            componentTag={containerTag}
            offset={offset}
            className={className}
        >
            {children}
        </Scrollspy>
    );
};

export { SectionWrapper };
