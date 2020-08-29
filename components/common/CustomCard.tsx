import { Theme } from "../../theme/theme";
import {
    Card,
    CardContent,
    CardContentProps,
    CardProps,
    createStyles,
    withStyles,
} from "@material-ui/core";
import React from "react";
import { PropsWithStylesAndChildren } from "../../theme/styleTypes";

const CardContentEqualPadding = withStyles((theme: Theme) =>
    createStyles({
        root: {
            "&:last-child": {
                paddingBottom: theme.spacing(2),
            },
        },
    })
)(
    ({
        classes,
        children,
        className,
        ...rest
    }: PropsWithStylesAndChildren<CardContentProps>) => (
        <CardContent
            className={`${classes.root} ${className ? className : ""}`}
            {...rest}
        >
            {children}
        </CardContent>
    )
);

const CustomCard: React.FC<CardProps> = ({
    children,
    className,
    classes,
    ...rest
}: PropsWithStylesAndChildren<CardProps>) => (
    <Card className={`${classes.root} ${className ? className : ""}`} {...rest}>
        {children}
    </Card>
);

export { CustomCard, CardContentEqualPadding };
