import { Grid } from "@material-ui/core"
import { SignPage } from "../../sign_up";
import { Login } from "../../sign_in";
import { BaseCom } from "../../login-que";

export const containerMain = (name, isDarkTheme) => {
    if (name === 1) {
        return(
         <Grid container justifyContent="center" alignItems="center">
            <Grid item md={4}>
                {Login(isDarkTheme)}
            </Grid>
        </Grid>);
    };
    if (name === 2) {
        return(
         <Grid container justifyContent="center" alignItems="center">
            <Grid item md={8}>
                {SignPage(isDarkTheme)}
            </Grid>
        </Grid>);
    };
    if (name === 3) {
        return(
         <Grid container justifyContent="center" alignItems="center">
            <Grid item md={4}>
                {BaseCom(isDarkTheme)}
            </Grid>
        </Grid>);
    };
};