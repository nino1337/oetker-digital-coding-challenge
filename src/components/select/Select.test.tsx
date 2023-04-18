import { axe, render, RenderResult, screen, userEvent } from '../../../utils/test-utils';

import Select from './Select';

const DEFAULT_PROPS = {
  items: ['option1', 'option2', 'option3'],
};

describe('<Select />', () => {
  let utils: RenderResult;
  describe('props', () => {
    describe('items', () => {
      describe('when items are given', () => {
        it('renders them as options', () => {
          utils = render(<Select {...DEFAULT_PROPS} onChange={jest.fn()} />);

          expect(screen.getByText('Please select')).toBeInTheDocument();
          expect(screen.getByText('option1')).toBeInTheDocument();
          expect(screen.getByText('option2')).toBeInTheDocument();
          expect(screen.getByText('option3')).toBeInTheDocument();
        });
      });
    });
  });

  describe('user-interaction', () => {
    describe('select item', () => {
      describe('when an item is selected', () => {
        it('it changes select value and executes onChange with item value', async () => {
          const handleChange = jest.fn();
          utils = render(<Select {...DEFAULT_PROPS} onChange={handleChange} />);

          expect(handleChange).not.toHaveBeenCalled();
          expect(screen.getByTestId('select')).toHaveValue('');

          await userEvent.selectOptions(screen.getByTestId('select'), 'option1');

          expect(handleChange).toHaveBeenCalledTimes(1);
          expect(handleChange).toHaveBeenCalledWith('option1');
          expect(screen.getByTestId('select')).toHaveValue('option1');
        });
      });
    });
  });

  describe('accessibility', () => {
    it('is accessible according to https://github.com/nickcolley/jest-axe', async () => {
      utils = render(<Select {...DEFAULT_PROPS} onChange={jest.fn()} />);
      const { container } = utils;
      const component = await axe(container);

      expect(component).toHaveNoViolations();
    });
  });
});
