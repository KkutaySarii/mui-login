import React, { useState } from "react";
import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import { darkTheme } from "./parts/lib/themes/dark/dark";
import { lightTheme } from "./parts/lib/themes/light/light";
import { BrowserRouter } from "react-router-dom";
import { Root } from "./Root";

export const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  return (
    <MuiThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Root isDarkTheme={isDarkTheme} />
      </BrowserRouter>
    </MuiThemeProvider>
  );
};

// {
//   /* <FullScreenContainer color={}>

// </FullScreenContainer>

// export const FullScreenContainer = () => {
//     const [isDarkTheme, setIsDarkTheme] = useState(true);
//     return(
//         <Box bgcolor = "background.default">
//             {App_bar(isDarkTheme)}
//          {children}
//         </Box>
//     );
// };

// export const FullScreeDrawerContainer = () => {
//     const [isDarkTheme, setIsDarkTheme] = useState(true);
//     return(
//         <Box bgcolor = "background.default">
//             {App_bar(isDarkTheme)}
//          {children}
//         </Box>
//     );
// }; */
// }
