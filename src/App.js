import React from 'react';
import theme from './theme';
import { ChakraProvider } from '@chakra-ui/react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routers';

function App() {
  return (
    <ChakraProvider
      theme={theme}
      toastOptions={{
        defaultOptions: {
          isClosable: true,
          position: 'bottom-right',
          variant: 'left-accent',
          duration: 2000
        }
      }}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
