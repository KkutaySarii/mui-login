import { Box, Button, CssBaseline, Divider, Grid, Link, Paper, TextField, Typography } from "@material-ui/core";
import { makeStyles, MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import React, { useState } from "react";
import { darkTheme } from './themes/dark';
import { lightTheme } from './themes/light';
import { App_bar } from './App_Bar';
import pic from './images/n_img.png';
import GoogleButton from 'react-google-button';
import { purple } from '@material-ui/core/colors';

const ColorButton = withStyles((t) => ({
    root: {
        width: '100%',
        color: t.palette.getContrastText(purple[500]),
        backgroundColor: purple[500],
        '&:hover': {
            backgroundColor: purple[700],
        },
    },
}))(Button);


const SignUp = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    return (
        <MuiThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
            <CssBaseline />
            <Box bgColor="background.default">
                {App_bar(isDarkTheme)}
                <Grid container justifyContent="center" alignItems="center">
                    <Grid item md={8}>
                        {SignPage(isDarkTheme)}
                    </Grid>
                </Grid>
            </Box>
        </MuiThemeProvider>
    );
};

export default SignUp;

export const SignPage = (isDarkTheme) => {
    const useStyles = makeStyles(() => ({
        paperRoot: {
            backgroundColor: isDarkTheme ? '#636363' : '#FFFFFFF',
            padding: "40px 72px 37px 72px",
            minWidth: "400px",
            color: isDarkTheme ? '#FFFFFF' : '#121212',
        },
        root: {
            '& > *': {
                width: '100%',
            },
        },
    }));
    const classes = useStyles();
    return (
        <Paper className={classes.paperRoot} elevation={10} >
            <Grid container direction="row" justifyContent="center" spacing={10}>
                <Grid item align="center">
                    <Box alignContent= "down">
                        <img alt="img" src={pic} />
                    </Box>
                </Grid>
                <Grid item   >
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
                            <Grid container direction="row" justifyContent="space-between" alignItems="stretch" >
                                <Grid item xs={6} sm={6}>
                                    <TextField
                                        id="name"
                                        label="Name"
                                        variant="outlined"
                                        color="secondary"
                                    />
                                </Grid>
                                <Grid item align="right" xs={6} sm={6} >
                                    <TextField
                                        id="surname"
                                        label="Surname"
                                        variant="outlined"
                                        color="secondary"
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <TextField id="email" label="Email address" variant="outlined" margin='normal' fullWidth color='default' />
                        </Grid>
                        <Grid item>
                            <TextField id="password" label="Password" variant="outlined" margin='normal' fullWidth color='default' />
                        </Grid>
                        <Grid item align='left'>
                            <Typography variant="body3">
                                <span>By registering, you agree to Monday Hero’s </span>
                            </Typography>
                            <Link
                                style={{
                                    color: '#9C77DC',
                                }}
                                variant="body3"
                                component="button"
                            >
                                Terms of service
                            </Link>
                            <Typography variant="body3"><span> and </span></Typography>
                            <Link
                                style={{
                                    color: '#9C77DC',
                                }}
                                variant="body3"
                                component="button"
                            >
                                Privacy Policy.
                            </Link>
                        </Grid>
                        <Grid item>
                            <Box mt={2}>
                                <ColorButton variant="contained" color="primary" fullWidth>
                                    Login
                                </ColorButton>
                            </Box>
                        </Grid>
                        <Grid item align="left">
                            <Typography variant="body3">
                                <span>Already have an account? </span>
                            </Typography>
                            <Link
                                style={{
                                    color: '#9C77DC',
                                }}
                                component="button"
                                variant="body3"
                            >
                                Login
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
};