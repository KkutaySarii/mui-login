import { makeStyles } from "@material-ui/core";
import { colors } from "../themes/colors";

export const usestyles = makeStyles((isDarkTheme) => ({
    root: {
        '& > *': {
            width: '100%'
        },
    },

    paperRoot: {
        backgroundColor: isDarkTheme ? colors.gray[900] : colors.white,
        padding: "40px 72px 37px 72px",
        minWidth: "400px",
        color: isDarkTheme ? colors.white : colors.gray[900],
    },
    closeButton: {
        color: colors.green[400],
    }
}));