import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import AvatarOptions from './AvatarOptions'
import ProjectButton from './ProjectButton';
import { Logo } from './Logo';


export default function Header() {
  const {
    isOpen: isHamburgerOpen,
    onOpen: onHamburgerOpen,
    onClose: onHamburgerClose
  } = useDisclosure();

  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} boxShadow='2xl'>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <IconButton
          size={'md'}
          icon={isHamburgerOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isHamburgerOpen ? onHamburgerClose : onHamburgerOpen}
        />
        <HStack spacing={8} alignItems={'center'}>
          <Logo />
          <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
            <ProjectButton />
          </HStack>
        </HStack>
        <Flex alignItems={'center'}>
          <ColorModeSwitcher />
          <AvatarOptions />
        </Flex>
      </Flex>

      {isHamburgerOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            <ProjectButton />
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}

