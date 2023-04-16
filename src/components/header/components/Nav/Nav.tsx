import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import navItems from '../data';
import * as S from './Nav.styles';

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <S.Nav>
      <S.Items>
        {navItems.map(({ title, href }) => {
          return (
            <S.Item key={title}>
              <Link href={href} passHref legacyBehavior>
                <S.Link isActive={href === pathname}>{title}</S.Link>
              </Link>
            </S.Item>
          );
        })}
      </S.Items>
    </S.Nav>
  );
};

export default Nav;
