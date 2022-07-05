import { colors } from "../../colors";

export const MuiButton = { 
    contained : {
        backgroundColor : colors.purple[500],
        '&:hover': {
            backgroundColor: colors.purple[600],
        },
        color: colors.white,
    },
    text: {
        color : colors.purple[500]
    }
};