import {Box, CssBaseline, Divider, Grid, Paper, TextField, Typography } from "@material-ui/core";
import { makeStyles, MuiThemeProvider } from '@material-ui/core/styles';
import React, { useState } from "react";
import { darkTheme } from './themes/dark';
import { lightTheme } from './themes/light';
import { App_bar } from './App_Bar';
import pic from './images/n_img.png';
import GoogleButton from 'react-google-button';


const SignUp = () => {
    const [light, setLight] = useState(false);
    const [isDarkTheme, setIsDarkTheme] = useState(true);

    return (
        <MuiThemeProvider theme={light ? lightTheme : darkTheme}>
            <CssBaseline/>
            <Box bgColor= "background.color">
                {App_bar(isDarkTheme)}
                <Grid container justifycenter= "center" alignItems= "center">
                    <Grid item md={4}>
                        {SignPage(isDarkTheme)}
                    </Grid>
                </Grid>
            </Box>
        </MuiThemeProvider>
    );
};

export default SignUp;

export const SignPage = (isDarkTheme) =>{
    const useStyles = makeStyles(() => ({
        paperRoot: {
            backgroundColor : isDarkTheme ? '#636363': '#FFFFFFF',
            padding: "40px 72px 37px 72px",
            minWidth: "400px",
            color :isDarkTheme ? '#FFFFFF': '#121212', 
        },
        root: {
            '& > *': {
                width: '100%',
            },
        },
        rootSpecial: {
            '& > *': {
                
            },
        },
    }));
    const classes = useStyles();
    return(
        <Paper className={classes.paperRoot} elevation = {10} >
            <Grid container direction="row"  justifyContent="center" alignItems="stretch" spacing= {10}>
                <Grid item >
                    <img alt = "img" src= {pic} />
                </Grid>
                <Grid item>
                    <Grid container direction='column' justifyContent='center' alignItems='stretch' spacing={2}>
                        <Grid item>
                            <Typography align='center' variant="h2">Sign up for free!</Typography>
                        </Grid>
                        <Grid item>
                            <Typography align='center'>Create a new account, easily.</Typography>
                        </Grid>
                        <Grid item >
                            <GoogleButton style={{ width: '100%' }} onClick={() => { console.log('Google Button clicked') }} />
                        </Grid>
                        <Grid item>
                            <Divider variant='middle' />
                        </Grid>
                        <Grid item>
                            <form className={classes.root} noValidate autoComplete="off">
                            <TextField
                                id="name"
                                label="Name"
                                variant="outlined"
                                color="secondary"
                            />
                            </form>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
};