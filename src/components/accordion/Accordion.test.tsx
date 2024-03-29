import { axe, render, RenderResult, screen, userEvent } from '../../../utils/test-utils';

import Accordion from './Accordion';

const DEFAULT_PROPS = {
  items: [
    {
      title: 'Test 1',
      body: {
        title: 'Body Title 1',
        text: 'Body Text 1',
        img: '',
        alt: 'Body Image 1',
      },
    },
    {
      title: 'Test 2',
      body: {
        title: 'Body Title 2',
        text: 'Body Text 2',
        img: '',
        alt: 'Body Image 2',
      },
    },
  ],
};

describe('<Accordion />', () => {
  let utils: RenderResult;
  describe('props', () => {
    describe('items', () => {
      describe('when items are given', () => {
        it('renders them correctly', () => {
          utils = render(<Accordion {...DEFAULT_PROPS} />);

          expect(screen.getByText('Test 1')).toBeInTheDocument();
          expect(screen.getByText('Body Title 1')).toBeInTheDocument();
          expect(screen.getByText('Body Text 1')).toBeInTheDocument();
          expect(screen.getByAltText('Body Image 1')).toBeInTheDocument();
          expect(screen.getByText('Test 2')).toBeInTheDocument();
        });
      });
    });
  });

  describe('user-interaction', () => {
    describe('click accordion item', () => {
      describe('when an accordion item is clicked', () => {
        it('opens its content', async () => {
          utils = render(<Accordion {...DEFAULT_PROPS} />);
          const firstAccordionItem = screen.getByText('Test 1');
          const accordionBody = firstAccordionItem.nextElementSibling;

          expect(accordionBody).toHaveStyle({
            'max-height': 0,
          });

          await userEvent.click(firstAccordionItem);

          expect(accordionBody).toHaveStyle({
            'max-height': '100rem',
          });
        });
      });
    });
  });

  describe('accessibility', () => {
    it('is accessible according to https://github.com/nickcolley/jest-axe', async () => {
      utils = render(<Accordion {...DEFAULT_PROPS} />);
      const { container } = utils;
      const component = await axe(container);

      expect(component).toHaveNoViolations();
    });
  });
});
