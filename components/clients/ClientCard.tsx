import { clientLogos } from "./clientLogos";
import React from "react";
import Link from "next/link";
import { BrightCard } from "./BrightCard";
import Image from "next/future/image";
import CardActionArea from "@mui/material/CardActionArea";
import { useTheme } from "@mui/system";

interface ClientCardProps {
    company: string;
    url: string;
    gridArea: string;
    slug: string;
    className?: string;
}

const ClientCard: React.FC<ClientCardProps> = ({
    company,
    url,
    slug,
    gridArea,
    className,
}) => {
    const theme = useTheme();

    return (
        <BrightCard className={className} style={{ gridArea }}>
            <Link
                href={"/portfolio/[slug]"}
                as={`/portfolio/${slug}`}
                passHref={true}
            >
                <CardActionArea
                    sx={{
                        position: "relative",
                        height: "100%",
                        width: "100%",
                        [theme.breakpoints.up("xl")]: {
                            minHeight: "170px",
                        },
                        [theme.breakpoints.up("md")]: {
                            minHeight: "130px",
                        },
                        [theme.breakpoints.down("md")]: {
                            minHeight: "100px",
                        },
                    }}
                    component="a"
                >
                    <Image
                        src={url}
                        alt={`Logo of ${company}`}
                        fill
                        style={{
                            objectFit: "contain",
                            padding: theme.spacing(2),
                        }}
                    />
                </CardActionArea>
            </Link>
        </BrightCard>
    );
}

const clientCards = Object.entries(clientLogos).map(
    ([name, [slug, url]]: [string, [string, string]], index: number) => {
        let className = "";
        if (index >= 8 && index < 10) {
            className = "hidden-md-down";
        }
        if (index >= 10) {
            className = "hidden-lg-down";
        }
        return (
            <ClientCard
                key={name}
                className={className}
                gridArea={name}
                company={name}
                url={url}
                slug={slug}
            />
        );
    }
);

export { clientCards };
