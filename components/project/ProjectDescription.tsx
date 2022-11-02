import React from "react";
import BlockContent from "@sanity/block-content-to-react";
import { Theme } from "../../theme/theme";
import { serializers } from "../../lib/sanity";
import {
    Card,
    CardContent,
    Divider,
    Typography,
    useMediaQuery,
} from "@mui/material";

interface ProjectDescriptionProps {
    categories: string[];
    description: string;
}

const ProjectDescription: React.FC<ProjectDescriptionProps> = ({
    categories,
    description,
}) => {
    const atLeastSm = useMediaQuery((theme: Theme) =>
        theme.breakpoints.up("sm")
    );

    return (
        <Card>
            <CardContent>
                <Typography variant={atLeastSm ? "h3" : "h4"} component="h2">
                    {categories.join(", ")}
                </Typography>
                <Divider
                    sx={(theme) => ({
                        [theme.breakpoints.up("sm")]: {
                            marginBottom: theme.spacing(2),
                        },
                        [theme.breakpoints.down("xs")]: {
                            marginBottom: theme.spacing(1),
                        },
                    })}
                />
                <Typography
                    sx={{
                        "& p": {
                            marginTop: 0,
                            marginBottom: 1,
                        },
                        "& p:last-child": {
                            marginBottom: 0,
                        },
                        "& a": {
                            color: "palette.text.primary",
                            textDecoration: "none",
                        },
                        "& a:hover": {
                            textDecoration: "underline",
                        },
                    }}
                    variant="body1"
                    component="div"
                >
                    <BlockContent
                        blocks={description}
                        serializers={serializers}
                    />
                </Typography>
            </CardContent>
        </Card>
    );
};

export { ProjectDescription };
