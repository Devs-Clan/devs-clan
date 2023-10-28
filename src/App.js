import React from 'react';
import theme from './theme/index';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import { router } from './routers';
import { NavBar, Footer } from './components';

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
        <RouterProvider router={router}/>
      </div>
    </ChakraProvider>
  );
}

export default App;
