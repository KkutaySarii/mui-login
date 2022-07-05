import { AppBar, Box, Toolbar } from "@material-ui/core";
import darklogo from "../images/Logo.png";
import lightlogo from "../images/logo2.png";

export const Appbar = (props) => {
    const {
        isDarkTheme,
    } = props;
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

//destruct