import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: '#7C83FD'
    }
  },
  typography: {
    h1: {
      fontSize: 'calc(45px + 8 * (100vw - 0px) / 1650)'
    },
    h2: {
      fontSize: 'calc(32px + 8 * (100vw - 0px) / 1650)'
    },
    h3: {
      fontSize: 'calc(28px + 8 * (100vw - 0px) / 1650)'
    },
    h4: {
      fontSize: 23
    },
    h5: {
      fontSize: 19
    },
    h6: {
      fontSize: 18
    }
  },
  shadows: [
    'none',
    '0px 5px 10px rgba(203, 203, 203, 0.2)',
    '0px 5px 10px rgba(203, 203, 203, 0.25)',
    '0px 5px 15px rgba(203, 203, 203, 0.3)',
    '0px 5px 20px rgba(203, 203, 203, 0.3)',
    '0px 5px 20px rgba(203, 203, 203, 0.35)',
    '0px 8px 25px rgba(203, 203, 203, 0.35)',
    '0px 8px 25px rgba(203, 203, 203, 0.4)',
    '0px 12px 30px rgba(203, 203, 203, 0.4)',
    '0px 12px 30px rgba(203, 203, 203, 0.45)',
    '0px 15px 35px rgba(203, 203, 203, 0.45)',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none'
  ],
});