import {  createTheme } from "@material-ui/core";

export const lightTheme = createTheme({
    palette: {
        primary: {
            main: "#32C08D",
            contrastText: "#fafafa",
        },
        secondary: {
            main: "#3664F9",
        },
        tertiary: {
            main: "#7F5FFF",
            contrastText: "#fafafa",
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
        },

        mode: "light",

        background: {
            default: "#fafafa",
        },
    },
});