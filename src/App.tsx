import * as React from 'react';
import { Box } from '@mui/material';
import { useState } from 'react'
import Footer from './components/Footer';
import Header from './components/Header';
import DrawerComponent from './components/DrawerComponent';
import ContentComponent from './components/ContentComponent';

const App = () => {

  const [open, setOpen] = useState<boolean>(false);

  const handleDrawerOpen: () => void = () => setOpen(true);
  const handleDrawerClose: () => void = () => setOpen(false);

  return (
    <Box sx={{ display: 'flex' }}>
      <Header open={open} handleDrawerOpen={handleDrawerOpen} />
      <DrawerComponent open={open} handleDrawerClose={handleDrawerClose} />
      <ContentComponent />
      <Footer />
    </Box >
  );
}

export default App;