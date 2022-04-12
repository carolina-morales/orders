import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './utils/theme';
import Orders from './pages/orders';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Orders />
      <ToastContainer theme='colored' />
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
