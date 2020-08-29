import {
    Card,
    createStyles,
    Divider,
    Hidden,
    Typography,
    useMediaQuery,
    withStyles,
} from "@material-ui/core";
import React from "react";
import { Theme } from "../../theme/theme";
import { PropsWithStyles } from "../../theme/styleTypes";
import { CardContentEqualPadding } from "../common/CustomCard";

interface ProjectDescriptionProps {
    categories: string[];
    description: string;
}

const projectDescriptionStyles = (theme: Theme) =>
    createStyles({
        content: {
            "& p": {
                marginTop: 0,
                marginBottom: theme.spacing(1),
            },
            "& p:last-child": {
                marginBottom: 0,
            },
            "& a": {
                color: theme.palette.text.primary,
                textDecoration: "none",
            },
            "& a:hover": {
                textDecoration: "underline",
            },
        },
        divider: {
            [theme.breakpoints.up("sm")]: {
                marginBottom: theme.spacing(2),
            },
            [theme.breakpoints.down("xs")]: {
                marginBottom: theme.spacing(1),
            },
        },
    });

const ProjectDescription = withStyles(projectDescriptionStyles)(
    ({
        categories,
        description,
        classes,
    }: PropsWithStyles<
        ProjectDescriptionProps,
        typeof projectDescriptionStyles
    >) => {
        const atLeastSm = useMediaQuery((theme: Theme) =>
            theme.breakpoints.up("sm")
        );

        return (
            <Card>
                <CardContentEqualPadding>
                    <Typography
                        variant={atLeastSm ? "h3" : "h4"}
                        component="h2"
                    >
                        {categories.join(", ")}
                    </Typography>
                    <Divider className={classes.divider} />
                    <Typography
                        className={classes.content}
                        variant="body1"
                        component="div"
                        dangerouslySetInnerHTML={{
                            __html: description,
                        }}
                    />
                </CardContentEqualPadding>
            </Card>
        );
    }
);

export { ProjectDescription };
