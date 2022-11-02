import React from "react";
import { BrightCard } from "./BrightCard";
import { LazyVideo } from "../common/LazyVideo";

const ClientVideo: React.FC = () => (
    <BrightCard
        sx={{
            gridArea: "video",
            display: "flex",
            borderRadius: "4px",
        }}
    >
        <LazyVideo
            videoId="Mf76HYjH7X8"
            title="Making of - 25,000 Dominoes inside a LUXURY Penthouse!"
        />
    </BrightCard>
);

export { ClientVideo };
