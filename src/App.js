import React, { useState } from "react";
import { Box, CssBaseline, MuiThemeProvider } from "@material-ui/core";
import { darkTheme } from './components/themes/dark';
import { lightTheme } from './components/themes/light';
import { App_bar } from './components/App_Bar';
import { containerMain } from "./components/parts/container-main";

export const App = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    return(
       <MuiThemeProvider theme = {isDarkTheme ? darkTheme : lightTheme }>
        <CssBaseline />
            <Box bgcolor = "background.default">
                {App_bar(isDarkTheme)}
            </Box>
            {containerMain(1,isDarkTheme)}
       </MuiThemeProvider>
    );
};


