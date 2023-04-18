import type { Meta, StoryObj } from '@storybook/react';

import LoadingSpinner from './LoadingSpinner';

const meta: Meta<typeof LoadingSpinner> = {
  title: 'Example/LoadingSpinner',
  component: LoadingSpinner,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LoadingSpinner>;

export const Primary: Story = {
  args: {
    visible: true,
  },
};
