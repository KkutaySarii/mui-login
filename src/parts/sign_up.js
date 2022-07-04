import { Box, Button, CssBaseline, Divider, Grid, Link, Paper, TextField, Typography } from "@material-ui/core";
import { makeStyles, MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import React, { useState } from "react";
// import { darkTheme } from './themes/lib/dark/dark';
// import { lightTheme } from './themes/lib/light/light';
// import { App_bar } from './App_Bar';
import pic from './images/n_img.png';
import GoogleButton from 'react-google-button';
import { purple } from '@material-ui/core/colors';

const ColorButton = withStyles((theme) => ({
    root: {
        width: '100%',
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: purple[500],
        '&:hover': {
            backgroundColor: purple[700],
        },
    },
}))(Button);


// const SignUp = () => {
//     const [isDarkTheme, setIsDarkTheme] = useState(true);

//     return (
//         <MuiThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
//             <CssBaseline />
//             <Box bgcolor="background.default">
//                 {App_bar(isDarkTheme)}
//                 <Grid container justifyContent="center" alignItems="center">
//                     <Grid item md={8}>
//                         {SignPage(isDarkTheme)}
//                     </Grid>
//                 </Grid>
//             </Box>
//         </MuiThemeProvider>
//     );
// };

// export default SignUp;

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
                <Grid item >
                    <Box align="center">
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
                                    />
                                </Grid>
                                <Grid item align="right" xs={6} sm={6} >
                                    <TextField
                                        id="surname"
                                        label="Surname"
                                        variant="outlined"
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <TextField id="email" label="Email address" variant="outlined" margin='normal' fullWidth />
                        </Grid>
                        <Grid item>
                            <TextField id="password" label="Password" variant="outlined" margin='normal' fullWidth />
                        </Grid>
                        <Grid item align='left'>
                                <span >By registering, you agree to Monday Hero’s </span>
                            <Link
                                style={{
                                    color: '#9C77DC',
                                }}
                                variant="body2"
                                component="button"
                            >
                                Terms of service
                            </Link>
                            <span> and </span>
                            <Link
                                style={{
                                    color: '#9C77DC',
                                }}
                                variant="body2"
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
                            <span>Already have an account? </span>
                            <Link
                                style={{
                                    color: '#9C77DC',
                                }}
                                component="button"
                                variant="body2"
                                onClick={() => {
                                    console.info("I'm a forget.");
                                }}
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