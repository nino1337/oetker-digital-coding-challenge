import { css, SerializedStyles } from '@emotion/react';
import { Theme } from '@emotion/react';

const globalStyles: (theme: Theme) => SerializedStyles = (theme) => css`
  html {
    background-color: ${theme.colors.background};
    font-family: ${theme.font.primary};
    font-size: 62.5%;
    height: 100vh;
    margin: 0;
  }

  body {
    font-size: 1.6rem;
  }
`;

export default globalStyles;
