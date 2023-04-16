import React from 'react';
import Nav from './components/Nav/Nav';

import Logo from './assets/logo.jpeg';

import * as S from './Header.styles';

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  return (
    <S.Header>
      <S.Logo src={Logo.src} alt="oetker-digital logo" />
      <Nav />
    </S.Header>
  );
};

export default Header;
