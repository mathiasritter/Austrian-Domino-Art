import React from "react";
import { Theme } from "../../theme/theme";
import { serializers } from "../../lib/sanity";
import {
    Card,
    CardContent,
    Divider,
    Typography,
    useMediaQuery,
} from "@mui/material";
import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "@portabletext/types";

interface ProjectDescriptionProps {
    categories: string[];
    description: PortableTextBlock;
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
                    <PortableText
                        value={description}
                        components={serializers}
                    />
                </Typography>
            </CardContent>
        </Card>
    );
};

export { ProjectDescription };
