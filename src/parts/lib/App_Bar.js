import { AppBar, Box, Toolbar } from "@material-ui/core";
import darklogo from "../images/Logo.png";
import lightlogo from "../images/logo2.png";

export const App_bar= (isDarkTheme) => {
    return (
        <AppBar position="static" color="transparent" elevation={0}>
                    <Toolbar>
                        <Box>
                            <img alt="mh" src={isDarkTheme ? darklogo : lightlogo} height={34} />
                        </Box>
                    </Toolbar>
        </AppBar>        
    );
};