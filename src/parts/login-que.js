import { Box, Button, Grid, MenuItem, Paper, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import pic from './images/tell_us.png';
import { useStyles } from "./lib/extensions/use-style";

export const BaseCom = (isDarkTheme) => {

    const classes = useStyles(isDarkTheme);
    const [work, setWork] = useState('');
    const [business, setBusiness] = useState('');
    const [people, setPeople] = useState('');
    const handleChangeWork = (event) => {
        setWork(event.target.value);
    };
    const handleChangeBusiness = (event) => {
        setBusiness(event.target.value);
    };
    const handleChangePeople = (event) => {
        setPeople(event.target.value);
    };

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
                    <TextField variant='outlined' id="select" label="What kind of work do you do?" value={work} select fullWidth onChange={handleChangeWork}>
                        <MenuItem value="Developer">Developer</MenuItem>
                        <MenuItem value="Student">Student</MenuItem>
                    </TextField>
                </Grid>
                <Grid item>
                    <TextField variant='outlined' id="select" label="What type of business are you working in?" value={business} select fullWidth onChange={handleChangeBusiness}>
                        <MenuItem value="Developer">Developer</MenuItem>
                        <MenuItem value="Student">Student</MenuItem>
                    </TextField>
                </Grid>
                <Grid item>
                    <TextField variant='outlined' id="select" label="How many people are on your team?" value={people} select fullWidth onChange={handleChangePeople}>
                        <MenuItem value="Developer">Developer</MenuItem>
                        <MenuItem value="Student">Student</MenuItem>
                    </TextField>
                </Grid>
                <Grid item>
                    <Button variant="contained" fullWidth>
                        Save
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant="contained" fullWidth>
                        Skip for now
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    );
};