import '@emotion/react';
import { Theme } from '@emotion/react';

type Colors = {
  primary: string;
  background: string;
  text: string;
  white: string;
  grey: string;
};

type Fonts = {
  primary: string;
  secondary: string;
};

/**
 * By default, props.theme is an empty object because it’s the only thing that is type-safe as a default.
 * You can define a theme type by extending our type declarations via your own declarations file.
 * see https://emotion.sh/docs/typescript#define-a-theme
 *
 * this is necessary to have auto-completion and to avoid compiling errors when using theme props in styled-components
 */
declare module '@emotion/react' {
  export interface Theme {
    colors: Colors;
    font: Fonts;
  }
}

const theme: Theme = {
  colors: {
    primary: '#4a90e2',
    background: '#333333',
    grey: '#f7f5f5',
    text: '#333333',
    white: '#ffffff',
  },
  font: {
    primary: 'sans-serif',
    secondary: 'arial',
  },
};

export default theme;
