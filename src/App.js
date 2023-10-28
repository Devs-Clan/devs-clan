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
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          justifyContent: 'space-between',
        }}
      >
        <NavBar />
        <RouterProvider router={router} />
        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default App;
