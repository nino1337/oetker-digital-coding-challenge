import React from 'react'
import { Global, ThemeProvider } from '@emotion/react'
import type { Preview } from '@storybook/react'

import theme from '../src/styles/theme'
import globals from '../src/styles/globals'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Global styles={globals} />
        <Story />
      </ThemeProvider>
    ),
  ],
}

export default preview
