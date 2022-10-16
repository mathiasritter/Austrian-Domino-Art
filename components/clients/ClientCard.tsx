import { clientLogos } from "./clientLogos";
import React from "react";
import Link from "next/link";
import { BrightCard } from "./BrightCard";
import Image from "next/image";
import CardActionArea from "@mui/material/CardActionArea";

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
}) => (
    <BrightCard className={className} style={{ gridArea }}>
        <Link
            href={"/portfolio/[slug]"}
            as={`/portfolio/${slug}`}
            passHref={true}
        >
            <CardActionArea
                sx={{
                    actionArea: {
                        height: "100%",
                    },
                }}
                component="a"
            >
                <Image
                    src={url}
                    alt={`Logo of ${company}`}
                    layout="fill"
                    objectFit="cover"
                />
            </CardActionArea>
        </Link>
    </BrightCard>
);

const clientCards = Object.entries(clientLogos).map(
    ([name, [slug, url]]: [string, [string, string]], index: number) => {
        let className = "";
        if (index >= 8 && index < 10) {
            className = "hidden-sm-down";
        }
        if (index >= 10) {
            className = "hidden-md-down";
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
