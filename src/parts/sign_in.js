import React from 'react';
import Paper from '@material-ui/core/Paper';
import pic from "./images/vector.png";
import { Button, Grid, Link, Typography, Box, IconButton, TextField } from '@material-ui/core';
import GoogleButton from 'react-google-button';
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from "@mui/material/InputAdornment";
import { colors } from './lib/themes/colors';
import Divider from '@material-ui/core/Divider';
import { useStyles } from './lib/extensions/use-style';



export const Login = (isDarkTheme) => {
    const classes = useStyles(isDarkTheme);
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <Paper className={classes.paperRoot} elevation={10} >
            <Grid container direction='column' justifyContent='center' alignItems='stretch' spacing={2}>
                <Grid item align='center'>
                    <Box >
                        <img src={pic} alt="vec" />
                    </Box>
                </Grid>
                <Grid item>
                    <Typography align='center' variant="h2">Welcome!</Typography>
                </Grid>
                <Grid item>
                    <Typography align='center'>Create Components / UI Library from design.</Typography>
                </Grid>
                <Grid item >
                    <GoogleButton style={{ width: '100%' }} onClick={() => { console.log('Google Button clicked') }} />
                </Grid>
                <Grid item>
                    <Divider />
                </Grid>
                <Grid item>
                    <TextField placeholder='Email address' id="email" variant="outlined" fullWidth></TextField>
                </Grid>
                <Grid item>
                    <TextField placeholder="Password" id="password" type={values.showPassword ? 'text' : 'password'} value={values.password} variant="outlined" onChange={handleChange('password')} fullWidth InputProps={{
                        endAdornment: <InputAdornment position="end">
                            <IconButton classes={{ root: classes.closeButton, }}
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>

                    }}></TextField>
                </Grid>
                <Grid item align='left'>
                    <Link
                        href='#'
                        style={{
                            color: colors.purple[500],
                        }}
                        component="button"
                        variant="body2"
                    >
                        Forgot Password?
                    </Link>
                </Grid>
                <Grid item>
                    <Button variant="contained" fullWidth>
                        Login
                    </Button>
                </Grid>
                <Grid item align="left">
                    <span>Don’t have an account? </span>
                    <Link
                        style={{
                            color: colors.purple[500],
                        }}
                        component="button"
                        variant="body2"
                        onClick={() => {
                            console.info("I'm a forget.");
                        }}
                    >
                        Sign up?
                    </Link>
                </Grid>
            </Grid>
        </Paper>
    )
}


