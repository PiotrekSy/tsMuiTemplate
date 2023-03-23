import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main:  '#5a06b5',
        },
        secondary: {
            main: '#decfeb',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#5a06b5',
        }
    },
});

export default theme;