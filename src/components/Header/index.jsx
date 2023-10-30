import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { FaSignOutAlt, FaRegSun, FaRegUserCircle } from 'react-icons/fa';
import { NavLink } from './NavLink';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { Logo } from '../Logo';
import { useNavigate } from 'react-router-dom'

const links = ['Projects', 'Members', 'News'];

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate()

  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} boxShadow='2xl'>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={'center'}>
          <Logo />
          <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
            {links.map(link => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </HStack>
        </HStack>

        <Flex alignItems={'center'}>
          <ColorModeSwitcher />
          <Menu>
            <MenuButton
              as={Button}
              rounded={'full'}
              variant={'link'}
              cursor={'pointer'}
              minW={0}
            >
              <Avatar ml={3} size={'sm'} src={''} />
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => navigate('profile')}>
                <FaRegUserCircle />
                <Text ml={3} >Profile</Text>
              </MenuItem>
              <MenuItem onClick={() => navigate('settings')}>
                <FaRegSun />
                <Text ml={3} >Settings</Text>
              </MenuItem>
              <MenuDivider />
              <MenuItem>
                <FaSignOutAlt />
                <Text ml={3} >Sign Out</Text>
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            {links.map(link => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
