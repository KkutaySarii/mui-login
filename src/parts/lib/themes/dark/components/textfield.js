import { colors } from "../../colors";

export const MuiTextField = {
    root: {
        '& label': {
            color: colors.gray[500],
        },
        '& label.Mui-focused': {
            color: colors.gray[500],
            borderBottomColor: colors.gray[700],
        },
        '& input ': {
            color: colors.gray[500],
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#636363',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#A0A0A0',
            },
            '&:hover fieldset': {
                borderColor: '#FFFFFF ',
            },
            '&.Mui-focused fieldset': {
                borderColor: colors.gray[400],
            },
        },
    },
};