import React from "react";
import Link from "next/link";
import { BrightCard } from "./BrightCard";
import Image from "next/future/image";
import CardActionArea from "@mui/material/CardActionArea";
import { useTheme } from "@mui/system";
import { ImageProps } from "../../lib/types";

interface ClientCardProps {
    image: ImageProps;
    gridArea: string;
    slug: string;
    className?: string;
}

const ClientCard: React.FC<ClientCardProps> = ({
    image,
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
                    component="a"
                    style={{
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Image
                        {...image}
                        placeholder="blur"
                        sizes="100vw"
                        style={{
                            maxWidth: "100%",
                            maxHeight: "200px",
                            height: "auto",
                            padding: theme.spacing(2),
                            objectFit: "contain",
                        }}
                    />
                </CardActionArea>
            </Link>
        </BrightCard>
    );
};

export { ClientCard };
