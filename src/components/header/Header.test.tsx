import theme from '@/styles/theme';
import React from 'react';
import { useRouter } from 'next/router';
import { render, axe, RenderResult } from '../../../utils/test-utils';

import navItems from './components/data';

import Header from './Header';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

// mock useRouter to avoid typescript errors
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
      const { getByText, getByAltText } = utils;

      expect(getByAltText('oetker-digital logo')).toBeInTheDocument();
      expect(getByText(navItems[0].title)).toBeInTheDocument();
      expect(getByText(navItems[1].title)).toBeInTheDocument();
    });
  });

  describe('when header is rendered on the main page', () => {
    it('displays the main page link as active', () => {
      utils = render(<Header />);
      const { getByText } = utils;

      expect(getByText(navItems[0].title)).toHaveStyle({
        color: theme.colors.primary,
        'border-color': theme.colors.primary,
      });

      expect(getByText(navItems[1].title)).toHaveStyle({
        color: theme.colors.text,
      });
    });

    describe('when header is rendered on the github-topics page', () => {
      beforeEach(() => {
        mockedUseRouter.mockReturnValue({ pathname: navItems[1].href });
      });
      it('displays the github-topics page link as active', () => {
        utils = render(<Header />);
        const { getByText } = utils;

        expect(getByText(navItems[1].title)).toHaveStyle({
          color: theme.colors.primary,
          borderColor: theme.colors.primary,
        });

        expect(getByText(navItems[0].title)).toHaveStyle({
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
