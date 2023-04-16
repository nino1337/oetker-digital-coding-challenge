import styled from '@emotion/styled';
import Image from 'next/image';

export const Header = styled.header`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.text};
  display: flex;
  height: 7rem;
  left: 0;
  padding: 1rem 2rem;
  position: fixed;
  right: 0;
  top: 0;
`;

export const Logo = styled(Image)`
  width: 8rem;
  height: auto;
`;
