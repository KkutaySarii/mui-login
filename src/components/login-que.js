import { Box, Button, CssBaseline, FormControl, Grid, InputLabel, makeStyles, MuiThemeProvider, Paper, Select, TextField, Typography, withStyles } from "@material-ui/core";
import React, { useState } from "react";
import { App_bar } from "./App_Bar";
import pic from './images/tell_us.png';
import { darkTheme } from './themes/dark';
import { lightTheme } from './themes/light';
import { purple } from '@material-ui/core/colors';

const LoginQue = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    return (
        <MuiThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
            <CssBaseline />
            <Box bgcolor="background.default">
                {App_bar(isDarkTheme)}
                <Grid container justifyContent="center" alignItems="center">
                    <Grid item md={4}>
                        {BaseCom(isDarkTheme)}
                    </Grid>
                </Grid>
            </Box>
        </MuiThemeProvider>
    );
};

const ColorButton = withStyles((t) => ({
    root: {
        color: t.palette.getContrastText(purple[500]),
        backgroundColor: purple[500],
        '&:hover': {
            backgroundColor: purple[700],
        },
    },
}))(Button);

export default LoginQue;

export const BaseCom = (isDarkTheme) => {
    const useStyles = makeStyles(() => ({
        root: {
            '& > *': {
                width: '100%'
            },
        },

        paperRoot: {
            backgroundColor: isDarkTheme ? '#232323' : '#FFFFFFF',
            padding: "40px 48px 40px 46px",
            minWidth: "400px",
            color: isDarkTheme ? '#FFFFFF' : '#121212',
        },
        formControl: {
            width: '100%',
        },
    }));
    const classes = useStyles();
    const handleChange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
    };

    const [state, setState] = React.useState({
        age: '',
        name: 'hai',
    });

    return (
        <Paper className={classes.paperRoot} elevation={10}>
            <Grid container direction="column" justifyContent="center" alignItems="stretch" spacing={2}>
                <Grid item align="center">
                    <Box>
                        <img alt="img" src={pic}></img>
                    </Box>
                </Grid>
                <Grid item>
                    <Typography align='center' variant="h2">Tell us about yourself!</Typography>
                </Grid>
                <Grid item>
                    <Typography align="center" >We want to tailor your experience.</Typography>
                </Grid>
                <Grid item>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel htmlFor="kindofWork" variant="outlined">What kind of work do you do?</InputLabel>
                        <Select
                            native
                            value={state.age}
                            onChange={handleChange}
                            label="kindofWork"
                            inputProps={{
                                name: 'age',
                                id: 'outlined-age-native-simple',
                            }}
                        >
                            <option aria-label="None" value="" />
                            <option value={10}>Ten</option>
                            <option value={20}>Twenty</option>
                            <option value={30}>Thirty</option>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel htmlFor="kindofWork" variant="outlined">What type of business are you working in?</InputLabel>
                        <Select
                            native
                            value={state.age}
                            onChange={handleChange}
                            label="kindofWork"
                            inputProps={{
                                name: 'age',
                                id: 'outlined-age-native-simple',
                            }}
                        >
                            <option aria-label="None" value="" />
                            <option value={10}>Ten</option>
                            <option value={20}>Twenty</option>
                            <option value={30}>Thirty</option>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel htmlFor="kindofWork" variant="outlined">How many people are on your team?</InputLabel>
                        <Select
                            native
                            value={state.age}
                            onChange={handleChange}
                            label="kindofWork"
                            inputProps={{
                                name: 'age',
                                id: 'outlined-age-native-simple',
                            }}
                        >
                            <option aria-label="None" value="" />
                            <option value={10}>Ten</option>
                            <option value={20}>Twenty</option>
                            <option value={30}>Thirty</option>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item>
                    <Box mt={2}>
                        <ColorButton variant="contained" color="primary" fullWidth>
                            Save
                        </ColorButton>
                    </Box>
                </Grid>
                <Grid item>
                    <Box mt={2}>
                        <ColorButton variant="contained" color="primary" fullWidth>
                            Skip for now
                        </ColorButton>
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    );
};