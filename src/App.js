import React, { useState } from "react";
import { Box, CssBaseline, MuiThemeProvider } from "@material-ui/core";
import { darkTheme } from './parts/lib/themes/dark/dark';
import { lightTheme } from './parts/lib/themes/light/light';
import { Appbar } from './parts/lib/App_Bar';
import { containerMain } from "./parts/lib/extensions/container-main";

export const App = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    return (
        <MuiThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
            <CssBaseline />
            <Box bgcolor="background.default">
                <Appbar isDarkTheme={isDarkTheme} />
            </Box>
            {containerMain(3, isDarkTheme)}
        </MuiThemeProvider>
    );
};


{/* <FullScreenContainer color={}>

</FullScreenContainer>

export const FullScreenContainer = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(true);
    return(
        <Box bgcolor = "background.default">
            {App_bar(isDarkTheme)}
         {children}
        </Box>
    );
};

export const FullScreeDrawerContainer = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(true);
    return(
        <Box bgcolor = "background.default">
            {App_bar(isDarkTheme)}
         {children}
        </Box>
    );
}; */}