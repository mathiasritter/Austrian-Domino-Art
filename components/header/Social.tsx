import React from "react";
import YouTubeIcon from "@material-ui/icons/YouTube";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import { WhiteIconButton } from "../common/WhiteIconButton";

const YouTube: React.FC = () => (
    <a
        href="https://www.youtube.com/AustrianDominoArt"
        target="_blank"
        rel="noreferrer"
    >
        <WhiteIconButton aria-label="YouTube">
            <YouTubeIcon />
        </WhiteIconButton>
    </a>
);

const Facebook: React.FC = () => (
    <a
        href="https://www.facebook.com/AustrianDominoArt"
        target="_blank"
        rel="noreferrer"
    >
        <WhiteIconButton aria-label="Facebook">
            <FacebookIcon />
        </WhiteIconButton>
    </a>
);

const Instagram: React.FC = () => (
    <a
        href="https://www.instagram.com/AustrianDominoArt"
        target="_blank"
        rel="noreferrer"
    >
        <WhiteIconButton aria-label="Instagram">
            <InstagramIcon />
        </WhiteIconButton>
    </a>
);

export { YouTube, Facebook, Instagram };
