import React from 'react';
import { Image } from '@chakra-ui/react';
import logo from '../../assets/devs-clan-logo-no-bg.png';

export function Logo({ size = 50, background = 'transparent' }) {
  return <Image style={{ borderRadius: 360, width: size, background: background }} src={logo} />;
};
