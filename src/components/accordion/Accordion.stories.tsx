import type { Meta, StoryObj } from '@storybook/react';

import Accordion from './Accordion';

import accordionItems from '@/views/homeAccordion/data/accordionItems';

const meta: Meta<typeof Accordion> = {
  title: 'Example/Accordion',
  component: Accordion,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Primary: Story = {
  args: {
    items: accordionItems,
  },
};
