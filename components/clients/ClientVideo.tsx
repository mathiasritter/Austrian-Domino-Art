import React from "react";
import { Theme } from "../../theme/theme";
import { BrightCard } from "./BrightCard";
import { createStyles, withStyles } from "@material-ui/core";
import { PropsWithStyles } from "../../theme/styleTypes";
import { LazyVideo } from "../common/LazyVideo";

const clientVideoStyles = (theme: Theme) =>
    createStyles({
        root: {
            gridArea: "video",
            display: "flex",
            borderRadius: "4px",
        },
    });

const ClientVideo = withStyles(clientVideoStyles)(
    ({ classes }: PropsWithStyles) => (
        <BrightCard className={classes.root}>
            <LazyVideo
                videoId="Mf76HYjH7X8"
                title="Making of - 25,000 Dominoes inside a LUXURY Penthouse!"
            />
        </BrightCard>
    )
);

export { ClientVideo };
