import { Box, Button, Divider, Grid, Link, Paper, TextField, Typography, makeStyles } from "@material-ui/core";
import pic from './images/n_img.png';
import GoogleButton from 'react-google-button';
import { colors } from './lib/themes/colors';
import { usestyles } from "./lib/extensions/use-style";



export const SignPage = (isDarkTheme) => {
    const useStyles = makeStyles(() => ({
        root: {
            '& > *': {
                width: '100%'
            },
        },

        paperRoot: {
            backgroundColor: isDarkTheme ? colors.gray[900] : colors.white,
            padding: "40px 48px 40px 46px",
            minWidth: "400px",
            color: isDarkTheme ? colors.white : colors.gray[900],
        },
        closeButton: {
            color: isDarkTheme ? colors.white : colors.gray[400],
        }
    }));
    const classes = useStyles();
    //const classes = usestyles(isDarkTheme);
    return (
        <Paper className={classes.paperRoot} elevation={10} >
            <Grid container direction="row" alignItems="center" justifyContent="center" spacing={10}>
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
                            <Divider />
                        </Grid>
                        <Grid item >
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
                        <Grid item >
                            <TextField id="email" label="Email address" variant="outlined" margin='normal' fullWidth />
                        </Grid>
                        <Grid item >
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
                            <Button variant="contained" fullWidth>
                                Login
                            </Button>
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