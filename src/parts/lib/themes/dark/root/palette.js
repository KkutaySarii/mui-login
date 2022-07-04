import { alpha } from "@mui/material";
import {colors} from "../../colors";

export const palette = {
    primary: {
        main: "#32C08D",
        contrastText: "#FFFFFF",
    },
    secondary: {
        main: "#3664F9",
        contrastText : colors.gray[400],
    },
    tertiary: {
        main: "#7F5FFF",
        contrastText: alpha(colors.gray[400], 50),
    },
    info: {
        main: "#7F5FFF",
    },
    warning: {
        main: "#FFCC26",
    },

    error: {
        main: "#ff5c41",
    },
    default: {
        main: "#bfbfbf",
        contrastText :alpha("#FFFFFF", 50), 
    },
    mode: "dark",

    background: {
        default: "#121212",
    },
}