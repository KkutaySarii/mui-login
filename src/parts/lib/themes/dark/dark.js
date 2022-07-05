import { createTheme } from "@material-ui/core";
import {palette} from "./root/palette";
import {components} from "./components/components";


export const darkTheme = createTheme({
    palette : palette,
    overrides: components,
});