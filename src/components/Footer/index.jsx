import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube, FaGithub } from 'react-icons/fa';
import { SocialButton } from './SocialButton';

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Text>Devs Clan - Join us!</Text>
        <Stack direction={'row'} spacing={6}>
          <SocialButton label={'Twitter'} href='#'>
            <FaTwitter />
          </SocialButton>
          <SocialButton label={'YouTube'} href='#'>
            <FaYoutube />
          </SocialButton>
          <SocialButton label={'Instagram'} href='#'>
            <FaInstagram />
          </SocialButton>
          <SocialButton label={'Github'} href='https://github.com/Devs-Clan'>
            <FaGithub />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
