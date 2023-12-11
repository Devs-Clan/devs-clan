import { createContext, useReducer } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { initialState, reducer } from "./store/reducer";
import { RouterProvider } from 'react-router-dom';
import { router } from './routers';
import theme from './theme';

export const AuthContext = createContext();


export function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
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
    </AuthContext.Provider>
  );
}