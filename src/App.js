import React, { useState } from "react";
import { Box, CssBaseline, MuiThemeProvider } from "@material-ui/core";
import { darkTheme } from './parts/lib/themes/dark/dark';
import { lightTheme } from './parts/lib/themes/light/light';
import { App_bar } from './parts/lib/App_Bar';
import { containerMain } from "./parts/lib/extensions/container-main";

export const App = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(true);
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


