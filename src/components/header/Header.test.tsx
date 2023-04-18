import theme from '@/styles/theme';
import { useRouter } from 'next/router';
import { axe, render, RenderResult, screen } from '../../../utils/test-utils';

import navItems from './components/Nav/data';

import Header from './Header';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

const mockedUseRouter = useRouter as jest.Mock;

describe('<Header />', () => {
  beforeEach(() => {
    mockedUseRouter.mockReturnValue({
      pathname: navItems[0].href,
    });
  });
  let utils: RenderResult;

  describe('when header is rendered', () => {
    it('renders nav items and logo', () => {
      utils = render(<Header />);

      expect(screen.getByAltText('oetker-digital logo')).toBeInTheDocument();
      expect(screen.getByText(navItems[0].title)).toBeInTheDocument();
      expect(screen.getByText(navItems[1].title)).toBeInTheDocument();
    });

    describe('on the main page', () => {
      it('displays the main page link as active', () => {
        utils = render(<Header />);

        expect(screen.getByText(navItems[0].title)).toHaveStyle({
          color: theme.colors.primary,
          'border-color': theme.colors.primary,
        });

        expect(screen.getByText(navItems[1].title)).toHaveStyle({
          color: theme.colors.text,
        });
      });
    });

    describe('on the github-topics page', () => {
      beforeEach(() => {
        mockedUseRouter.mockReturnValue({ pathname: navItems[1].href });
      });
      it('displays the github-topics page link as active', () => {
        utils = render(<Header />);

        expect(screen.getByText(navItems[1].title)).toHaveStyle({
          color: theme.colors.primary,
          borderColor: theme.colors.primary,
        });

        expect(screen.getByText(navItems[0].title)).toHaveStyle({
          color: theme.colors.text,
        });
      });
    });
  });

  describe('accessibility', () => {
    it('is accessible according to https://github.com/nickcolley/jest-axe', async () => {
      utils = render(<Header />);
      const { container } = utils;
      const component = await axe(container);

      expect(component).toHaveNoViolations();
    });
  });
});
