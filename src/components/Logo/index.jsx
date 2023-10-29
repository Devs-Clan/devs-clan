import React from 'react';
import { Image, useColorMode } from '@chakra-ui/react';
import lightmodeLogo from '../../assets/logo-no-bg-lightmode.png';
import darkmodeLogo from '../../assets/logo-no-bg-darkmode.png';

export function Logo({ size = 50, background = 'transparent' }) {
  const { colorMode } = useColorMode()
  return (
    <Image
      style={{
        borderRadius: 360,
        width: size,
        background: background
      }}
      src={colorMode === 'dark' ? darkmodeLogo : lightmodeLogo} />
  );
};
