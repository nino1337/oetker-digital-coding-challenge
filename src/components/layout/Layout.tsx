import { ReactNode } from 'react';
import Header from '../header/Header';
import * as S from './Layout.styles';

interface LayoutProps {
  children: ReactNode | ReactNode[];
}

const Layout = ({ children }: LayoutProps) => (
  <S.Layout>
    <Header />
    <S.Main>{children}</S.Main>
  </S.Layout>
);

export default Layout;
