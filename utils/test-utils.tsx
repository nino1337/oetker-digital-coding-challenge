import globalStyles from '@/styles/globals';
import theme from '@/styles/theme';
import { Global, ThemeProvider } from '@emotion/react';
import { render, RenderOptions } from '@testing-library/react';
import 'jest-axe/extend-expect';
import { ReactElement } from 'react';

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      {children}
    </ThemeProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: Wrapper, ...options });

// re-export everything
export * from '@testing-library/react';
export * from '@testing-library/jest-dom';
export * from 'jest-axe';
// override render method
export { customRender as render };
