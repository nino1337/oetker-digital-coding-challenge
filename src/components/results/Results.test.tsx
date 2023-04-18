import { axe, render, RenderResult, screen } from '../../../utils/test-utils';

import Results from './Results';

const DEFAULT_PROPS = {
  items: [
    {
      img: 'https://placehold.co/50x50',
      imgAlt: 'avatar alt',
      name: 'repository name 1',
      githubStars: 1200,
      href: 'https://www.oetkerdigital.com/de',
    },
    {
      img: 'https://placehold.co/50x50',
      imgAlt: 'avatar alt',
      name: 'repository name 2',
      githubStars: 4000,
      href: 'https://www.oetkerdigital.com/de',
    },
    {
      img: 'https://placehold.co/50x50',
      imgAlt: 'avatar alt',
      name: 'repository name 3',
      githubStars: 8000,
      href: 'https://www.oetkerdigital.com/de',
    },
  ],
};

describe('<Results />', () => {
  let utils: RenderResult;
  describe('props', () => {
    describe('items', () => {
      describe('when items are given', () => {
        it('renders them correctly', () => {
          utils = render(<Results {...DEFAULT_PROPS} />);

          expect(screen.getByText('repository name 1')).toBeInTheDocument();
          expect(screen.getByText('repository name 2')).toBeInTheDocument();
          expect(screen.getByText('repository name 3')).toBeInTheDocument();
        });
      });
    });
  });

  describe('accessibility', () => {
    it('is accessible according to https://github.com/nickcolley/jest-axe', async () => {
      utils = render(<Results {...DEFAULT_PROPS} />);
      const { container } = utils;
      const component = await axe(container);

      expect(component).toHaveNoViolations();
    });
  });
});
