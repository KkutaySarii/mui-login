import { createTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import { MuiThemeProvider } from '@material-ui/core/styles';
import React, { useState } from "react";


const lightTheme = createTheme({
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

const darkTheme = createTheme({
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
        mode: "dark",

        background: {
            default: "#121212",
        },
    },
});



const SignUp = () => {
    const [light, setLight] = useState(false);
    return (
        <MuiThemeProvider theme={light ? lightTheme : darkDarkTh}>
            <CssBaseline/>
        
        </MuiThemeProvider>
    )
}


export default SignUp;