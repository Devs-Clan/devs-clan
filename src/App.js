import React from 'react';
import theme from './theme/index';
import { ChakraProvider } from '@chakra-ui/react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routers';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <NavBar />
      <RouterProvider router={router} />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
