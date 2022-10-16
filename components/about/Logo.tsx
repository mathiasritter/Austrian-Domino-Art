import React from "react";
import SvgIcon from "@mui/material/SvgIcon";

const Logo: React.FC = () => (
    <SvgIcon
        sx={{
            height: "100%",
            width: "100%",
            userSelect: "none",
            cursor: "default",
        }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 240.5 240.5"
    >
        <defs>
            <linearGradient
                id="a"
                x1="120.07"
                y1="1.23"
                x2="120.43"
                y2="242.26"
                gradientUnits="userSpaceOnUse"
            >
                <stop offset="0" stopColor="#b53019" />
                <stop offset="1" stopColor="#8b2f1c" />
            </linearGradient>
            <clipPath id="b">
                <circle cx="120.25" cy="120.25" r="119.75" fill="none" />
            </clipPath>
        </defs>
        <circle
            cx="120.25"
            cy="120.25"
            r="120"
            stroke="#000"
            strokeMiterlimit="10"
            strokeWidth="0.5"
            fill="url(#a)"
        />
        <g clipPath="url(#b)">
            <rect
                x="60.9"
                y="40.61"
                width="18.83"
                height="128.52"
                transform="translate(83.85 -20.66) rotate(40)"
                fill="#fff"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="0.5"
            />
            <rect
                x="98.55"
                y="35.53"
                width="18.83"
                height="128.52"
                transform="matrix(0.87, 0.5, -0.5, 0.87, 64.36, -40.61)"
                fill="#fff"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="0.5"
            />
            <rect
                x="15.91"
                y="47.39"
                width="18.83"
                height="128.52"
                transform="translate(94.56 20.48) rotate(50)"
                fill="#fff"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="0.5"
            />
            <text
                transform="translate(106.5 160.17)"
                fontSize="170"
                fill="#fff"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="0.5"
                fontFamily="Roboto-Bold, Roboto"
                fontWeight="700"
            >
                A
            </text>
            <rect
                x="3.14"
                y="177.42"
                width="233"
                height="23.93"
                fill="#fff"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="0.5"
            />
            <text
                transform="translate(34 196.5)"
                fontSize="19"
                fill="#aa413a"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="0.2"
                fontFamily="Roboto-Medium, Roboto"
                fontWeight="500"
            >
                <tspan letterSpacing="-0.01em">A</tspan>
                <tspan x="12.54" y="0">
                    ustrian Domino A
                </tspan>
                <tspan x="159.71" y="0" letterSpacing="0.02em">
                    r
                </tspan>
                <tspan x="166.85" y="0" letterSpacing="0em">
                    t
                </tspan>
            </text>
        </g>
    </SvgIcon>
);

export { Logo };
