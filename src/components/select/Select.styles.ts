import styled from '@emotion/styled';

export const Select = styled.select`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.text};
  font-size: 2rem;
  margin-bottom: 1rem;
  padding: 1rem 1.4rem;
  width: 100%;
`;
