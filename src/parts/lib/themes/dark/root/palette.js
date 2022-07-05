import {colors} from "../../colors";

export const palette = {
    primary: {
        main: "#32C08D",
        contrastText: colors.white ,
    },
    secondary: {
        main: colors.geekBlue[400],
        contrastText : colors.gray[400],
    },
    tertiary: {
        main: colors.purple[400],
        contrastText: colors.gray[400],
    },
    info: {
        main: colors.blue[400],
    },
    warning: {
        main: colors.yellow[400],
    },

    error: {
        main: colors.red[400],
    },
    default: {
        main: colors.gray[400 ],
        contrastText :colors.white, 
    },
    mode: "dark",

    background: {
        default: "#121212",
    },
}