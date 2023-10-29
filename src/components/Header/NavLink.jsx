import { Link, useColorModeValue } from '@chakra-ui/react';

export const NavLink = ({ children }) => (
  <Link
    px={4}
    py={2}
    rounded={'sm'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'/' + children.toLowerCase()}
  >
    {children}
  </Link>
);
