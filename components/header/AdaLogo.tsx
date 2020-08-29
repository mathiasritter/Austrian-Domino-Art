import { Theme } from "../../theme/theme";
import React from "react";
import { createStyles, WithStyles, withStyles } from "@material-ui/core";
import Link from "next/link";

const adaLogoStyles = (theme: Theme) =>
    createStyles({
        root: {
            cursor: "pointer",
            display: "flex",
            [theme.breakpoints.up("md")]: {
                height: "40px",
                marginRight: theme.spacing(2),
            },
            [theme.breakpoints.down("sm")]: {
                height: "30px",
                marginRight: theme.spacing(1),
            },
        },
        svg: {
            height: "100%",
        },
    });

const AdaLogo = withStyles(adaLogoStyles)(
    ({ classes }: WithStyles<typeof adaLogoStyles>) => (
        <Link href="/">
            <div className={classes.root}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 251.05 121.46"
                    className={classes.svg}
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
                </svg>
            </div>
        </Link>
    )
);

export { AdaLogo };
