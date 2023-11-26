import { createBrowserRouter, Outlet } from 'react-router-dom';
import { Projects, Settings, Members, News, Homepage } from '../pages/';
import { Footer, Header } from '../components';
import { Flex } from '@chakra-ui/react';

const AppStructure = () => (
  <Flex flexDirection='column'>
    <Header />
    <div style={{ padding: 10 }}>
      {window.location.pathname == '/' ? <Homepage /> : <Outlet />}
    </div>
    <Footer />
  </Flex>
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppStructure />,
    children: [
      {
        path: 'settings',
        element: <Settings />
      },
      {
        path: 'projects',
        element: <Projects />,
      },
      {
        path: 'members',
        element: <Members />,
      },
      {
        path: 'news',
        element: <News />,
      },
      {
        path: 'homepage',
        element: <Homepage />,
      }
    ],
  },
]);
