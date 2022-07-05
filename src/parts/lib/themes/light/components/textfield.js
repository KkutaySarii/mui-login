import { colors } from "../../colors";

export const MuiTextField  = {
    root: {
        '& label': {
            color: colors.gray[500],
        },
        '& label.Mui-focused': {
            color:  colors.gray[400],
            borderBottomColor: colors.gray[400],
        },
        '& input ': {
            color: colors.gray[900],
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: colors.gray[400],
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor:  colors.gray[400],
            },
            '&:hover fieldset': {
                borderColor: colors.purple[500],
            },
            '&.Mui-focused fieldset': {
                borderColor: colors.gray[400],
            },
        },
    },
};