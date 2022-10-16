import React from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import SvgIcon from "@mui/material/SvgIcon";

const AdaLogo: React.FC = () => (
    <Link href="/">
        <Box
            sx={{
                cursor: "pointer",
                display: "flex",
                height: {
                    xs: "30px",
                    md: "40px",
                },
                marginRight: {
                    xs: 1,
                    md: 2,
                },
            }}
        >
            <SvgIcon
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 251.05 121.46"
                sx={{ height: "100%" }}
            >
                <rect
                    x="91.2"
                    y="1.55"
                    width="18.83"
                    height="128.52"
                    transform="translate(65.84 -49.28) rotate(40)"
                    fill="#fff"
                    stroke="#000"
                    strokeMiterlimit="10"
                    strokeWidth="0.5"
                />
                <rect
                    x="128.86"
                    y="-3.52"
                    width="18.83"
                    height="128.52"
                    transform="matrix(0.87, 0.5, -0.5, 0.87, 48.89, -61)"
                    fill="#fff"
                    stroke="#000"
                    strokeMiterlimit="10"
                    strokeWidth="0.5"
                />
                <rect
                    x="46.21"
                    y="8.33"
                    width="18.83"
                    height="128.52"
                    transform="translate(75.47 -16.68) rotate(50)"
                    fill="#fff"
                    stroke="#000"
                    strokeMiterlimit="10"
                    strokeWidth="0.5"
                />
                <path
                    d="M215.83,96.21H172.16l-8.3,24.9H137.38L182.37.25h23.08l45.24,120.86H224.21ZM178.89,76H209.1L193.91,30.8Z"
                    fill="#fff"
                    stroke="#000"
                    strokeMiterlimit="10"
                    strokeWidth="0.5"
                />
            </SvgIcon>
        </Box>
    </Link>
);

export { AdaLogo };
