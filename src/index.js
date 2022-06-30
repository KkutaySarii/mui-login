import React, { useState } from 'react';
import {createRoot} from 'react-dom/client'
import Paper from '@material-ui/core/Paper';
import pic from "./images/vector.png";
import { AppBar, Button, CssBaseline, Grid, Link, Toolbar, Typography, Box, FormControl, InputLabel, OutlinedInput, IconButton} from '@material-ui/core';
import GoogleButton from 'react-google-button'; 
import { createTheme, makeStyles, withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from "@mui/material/InputAdornment";
import { purple } from '@material-ui/core/colors';
import logo from "./images/logo2.png";
import Divider from '@material-ui/core/Divider';
import { ThemeProvider } from 'styled-components';
import clsx from 'clsx';

const lightMode = {
    palette: {
        mode: "light",
        background: {
        default: "#FFFFFF",
        },
    },
};

const darkMode = {
    palette: {
        mode: "dark",
        background: {
            default: "#121212",
        },
    },
};


/* 
const IconTextField = ({ iconStart, iconEnd, InputProps, ...props }) => {
    return (
      <TextField
        {...props}
        fullWidth
        InputProps={{
          ...InputProps,
          startAdornment: iconStart ? (
            <InputAdornment position="start">{iconStart}</InputAdornment>
          ) : null,
          endAdornment: iconEnd ? (
            <InputAdornment position="end">{iconEnd}</InputAdornment>
          ) : null
        }}
      />
    );
}; */
  

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

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        width: '100%'
      },
    },
  }));


const App =  () => {   
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const changeTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };
    const paperStyle = {
        padding: "40px 72px 36px 72px",
    };
    return (
        <ThemeProvider theme = {createTheme(darkMode)}>
            <CssBaseline />
            <Box bgcolor= 'background.default'>
                <AppBar position="static" color = "transparent" elevation={0}>
                    <Toolbar>
                        <Box>
                            <img alt = "mh" src={logo} height = {34}/>
                        </Box>
                    </Toolbar>
                </AppBar>
                <Grid container justifyContent='center' alignItems='center' direction = "row" spacing= {4}>
                    <Grid item md = {4}>
                        {Login(paperStyle)}
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider> 
        
    );
}




const Login = (paperStyle) =>{
    const classes = useStyles();
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
        <Paper elevation={10} style={paperStyle}>
            <Grid container direction='column' justifyContent='center' alignItems='sketch' spacing={2}>
                <Grid item>
                    <Box >
                        <img src= {pic} alt="vec" />
                    </Box>
                </Grid>
                    <Grid item>
                        <Typography variant="h2">Welcome!</Typography> 
                    </Grid>
                    <Grid item>
                        <Typography>Create Components / UI Library from design.</Typography>
                    </Grid>
                    <Grid item >
                        <GoogleButton style={{ width: '100%'}} onClick={()=>{console.log('Google Button clicked')}} />
                    </Grid>
                    <Grid item>
                        <Divider variant='middle' />
                    </Grid>  
                    <Grid item>
                        <TextField id="email" label="Email address" variant="outlined" margin='normal' fullWidth />
                    </Grid>
                    <Grid item>
                        <FormControl fullWidth className={clsx(classes.margin, classes.textField)} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChange('password')}
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                    >
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                                }
                                labelWidth={70}
                            />
                        </FormControl>
                    </Grid> 
                    <Grid item align = 'left'>
                        <Link   
                            href = '#'
                            style = {{
                                color : purple[500],
                            }}
                            component="button"
                            variant="body2"
                        >
                            Forgot Password?
                        </Link>
                    </Grid>
                    <Grid item>
                        <Box mt = {2}>
                            <ColorButton variant="contained" color="primary" fullWidth>
                                Login
                            </ColorButton>  
                        </Box>
                    </Grid>   
                    <Grid item align = "left">
                        Don’t have an account?
                        <Link 
                            style = {{
                                color : purple[500],
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

export default Login;
 
const container = document.querySelector('#root');
const root = createRoot(container);
root.render(<App />);