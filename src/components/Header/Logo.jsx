import React from 'react';
import { Image, useColorModeValue } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import lightmodeLogo from '../../assets/logo-no-bg-lightmode.png';
import darkmodeLogo from '../../assets/logo-no-bg-darkmode.png';

export function Logo({ size = 50, background = 'transparent' }) {
  const navigate = useNavigate()
  return (
    <Image
      style={{
        borderRadius: 360,
        width: size,
        background: background,
        cursor: 'pointer'
      }}
      onClick={() => navigate('/homepage')}
      src={useColorModeValue(lightmodeLogo, darkmodeLogo)} />
  );
};
