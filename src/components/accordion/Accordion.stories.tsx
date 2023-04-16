import type { Meta, StoryObj } from '@storybook/react';

import MockImage from './mock.svg';

import Accordion from './Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Example/Accordion',
  component: Accordion,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Primary: Story = {
  args: {
    items: [
      {
        title: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr 1',
        body: {
          title: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
          text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusa',
          img: MockImage,
          alt: 'dadwa',
        },
      },
      {
        title: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr 2',
        body: {
          title: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
          text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusa',
          img: MockImage,
          alt: 'dadwa',
        },
      },
      {
        title: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr 3',
        body: {
          title: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
          text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusa',
          img: MockImage,
          alt: 'dadwa',
        },
      },
    ],
  },
};
