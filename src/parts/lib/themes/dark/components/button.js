import { colors } from "../../colors";

export const MuiButton = {
    label: {
        color : colors.white,
    },
    contained : {
        backgroundColor : colors.purple[400],
        '&:hover': {
            backgroundColor: colors.purple[500],
        },
    }
};