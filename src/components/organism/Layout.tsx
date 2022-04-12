import React from 'react';
import { Container, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    padding: 24,
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const classes = useStyles();

  return (
    <Container maxWidth='lg' className={classes.container}>
      {children}
    </Container>
  );
};

interface LayoutProps {
  children: any
}

export default Layout;