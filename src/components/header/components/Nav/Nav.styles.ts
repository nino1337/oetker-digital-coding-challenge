import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Nav = styled.nav`
  margin-left: auto;
`;

export const Items = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  display: flex;
  &:not(:last-child) {
    margin-right: 2rem;
  }
`;

export const Link = styled.a<{ isActive: boolean }>`
  color: ${({ theme }) => theme.colors.text};
  border-bottom: 1px solid transparent;
  font-size: 1.8rem;
  text-decoration: none;
  transition: border 0.2s;

  ${({ isActive, theme }) =>
    isActive &&
    css`
      border-color: ${theme.colors.primary};
      color: ${theme.colors.primary};
    `}
`;
