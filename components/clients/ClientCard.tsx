import { clientLogos } from "./clientLogos";
import React from "react";
import { Theme } from "../../theme/theme";
import { CardActionArea, createStyles, withStyles } from "@material-ui/core";
import Link from "next/link";
import { BrightCard } from "./BrightCard";
import { LazyClientImage } from "./LazyClientImage";
import { PropsWithStyles } from "../../theme/styleTypes";

interface ClientCardProps {
    company: string;
    url: string;
    gridArea: string;
    slug: string;
    className?: string;
}

const clientCardStyles = (theme: Theme) =>
    createStyles({
        actionArea: {
            height: "100%",
        },
    });

const ClientCard = withStyles(clientCardStyles)(
    ({
        company,
        url,
        slug,
        classes,
        gridArea,
        className,
    }: PropsWithStyles<ClientCardProps, typeof clientCardStyles>) => (
        <BrightCard className={className} style={{ gridArea }}>
            <Link
                href={"/portfolio/[slug]"}
                as={`/portfolio/${slug}`}
                passHref={true}
            >
                <CardActionArea className={classes.actionArea} component="a">
                    <LazyClientImage src={url} alt={`Logo of ${company}`} />
                </CardActionArea>
            </Link>
        </BrightCard>
    )
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
