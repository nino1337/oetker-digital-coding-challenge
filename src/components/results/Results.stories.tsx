import type { Meta, StoryObj } from '@storybook/react';

import MockImage from './mock.svg';

import Results from './Results';

const meta: Meta<typeof Results> = {
  title: 'Example/Results',
  component: Results,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Results>;

export const Primary: Story = {
  args: {
    items: [
      {
        img: 'https://placehold.co/50x50',
        imgAlt: 'avatar alt',
        name: 'repository name 1',
        githubStars: '5000',
        href: 'https://www.oetkerdigital.com/de',
      },
      {
        img: 'https://placehold.co/50x50',
        imgAlt: 'avatar alt',
        name: 'repository name 2',
        githubStars: '5000',
        href: 'https://www.oetkerdigital.com/de',
      },
      {
        img: 'https://placehold.co/50x50',
        imgAlt: 'avatar alt',
        name: 'repository name 3',
        githubStars: '5000',
        href: 'https://www.oetkerdigital.com/de',
      },
    ],
  },
};
