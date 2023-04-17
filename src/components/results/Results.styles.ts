import styled from '@emotion/styled';
import Image from 'next/image';

export const Results = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
`;

export const Result = styled.li`
  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.text};
  display: flex;
  margin-bottom: 1rem;
`;

export const Link = styled.a`
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  padding: 1rem 1.4rem;
  text-decoration: none;
  width: 100%;
`;

export const Avatar = styled(Image)`
  margin-right: 1rem;
`;

export const Name = styled.h4``;

export const GithubStars = styled.span`
  align-items: flex-start;
  display: flex;
  margin-left: auto;
`;

export const GithubStarsIcon = styled(Image)`
  height: auto;
  width: 16px;
`;
