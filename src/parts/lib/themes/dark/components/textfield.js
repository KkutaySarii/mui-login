import { colors } from "../../colors";

export const MuiTextField = {
    root: {
        '& label': {
            color: colors.gray[500],
        },
        '& label.Mui-focused': {
            color: colors.gray[500],
            borderBottomColor: colors.gray[900],
        },
        '& input ': {
            color: colors.white,
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#636363',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: colors.gray[400],
            },
            '&:hover fieldset': {
                borderColor: colors.white,
            },
            '&.Mui-focused fieldset': {
                borderColor: colors.gray[400],
            },
        },
    },
};