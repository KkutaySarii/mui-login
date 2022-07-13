import { Box, Grid } from "@material-ui/core";
import { Appbar } from "./lib/App_Bar";

export const Main = (props) => {
  const { isDarkTheme } = props;
  return (
    <>
      <Box bgcolor="background.default">
        <Appbar isDarkTheme={isDarkTheme} />
      </Box>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item md={4}>
          {props.children}
        </Grid>
      </Grid>
    </>
  );
};
