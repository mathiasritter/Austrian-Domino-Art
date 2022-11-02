import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React, { useCallback } from "react";
import { keyframes } from "@mui/system";

const bounce = keyframes`
    0%, 20%, 50%, 80%, 100% {
        transform: "translateY(0)",
    }
    40% {
        transform: "translateY(-30px)",
    }
    60% {
        transform: "translateY(-15px)",
    }
`;

const Arrow: React.FC = () => {
    const handleClick = useCallback(() => {
        document.getElementById("portfolio").scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }, []);
    return (
        <KeyboardArrowDownIcon
            sx={{
                cursor: "pointer",
                height: "60px",
                width: "60px",
                color: "white",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "50px",
                animation: `3s infinite ${bounce}`,
            }}
            onClick={handleClick}
        />
    );
};

export { Arrow };
