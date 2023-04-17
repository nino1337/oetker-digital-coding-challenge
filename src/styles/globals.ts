import { css, SerializedStyles, Theme } from '@emotion/react';

const globalStyles: (theme: Theme) => SerializedStyles = (theme) => css`
  html {
    background-color: ${theme.colors.background};
    font-family: ${theme.font.primary};
    font-size: 62.5%;
    margin: 0;
    overflow-y: scroll;
  }

  body {
    font-size: 1.6rem;
  }

  h1 {
    color: ${theme.colors.white};
    font-size: 4rem;
  }

  p {
    color: ${theme.colors.white};
  }
`;

export default globalStyles;
