import Layout from '@/components/layout/Layout';
import globals from '@/styles/globals';
import theme from '@/styles/theme';
import { Global, ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globals} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
