import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Image from 'next/image';

import mq from '@/styles/mq';

export const Accordion = styled.div``;

export const Items = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const ItemBody = styled.div<{ isOpen: boolean }>`
  background-color: ${({ theme }) => theme.colors.grey};
  display: flex;
  flex-direction: column;
  max-height: 0;
  padding: 0 1.4rem;
  overflow: hidden;
  transition: max-height 0.2s, padding 0.2s;

  ${({ isOpen }) =>
    isOpen &&
    css`
      max-height: 100rem;
      padding: 1.4rem;
    `}

  ${mq.md} {
    flex-direction: row;
  }
`;

export const ItemTitle = styled.h3`
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  font-size: 2rem;
  margin: 0;
  padding: 1.4rem;
`;

export const BodyTitle = styled.h4`
  font-size: 1.8rem;
`;

export const BodyText = styled.p``;

export const BodyImage = styled(Image)`
  height: auto;
  max-width: 100%;
  margin: 0 auto 1rem;

  ${mq.md} {
    max-width: 30%;
    margin-bottom: 0;
    margin-right: 1rem;
  }
`;