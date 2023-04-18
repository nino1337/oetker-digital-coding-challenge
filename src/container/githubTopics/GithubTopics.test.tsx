import { cleanup, render, RenderResult, screen, userEvent } from '../../../utils/test-utils';
import getRepositoriesByTopic from '../../services/getRepositoriesByTopic';
import GithubTopics from './GithubTopics';

jest.mock('../../services/getRepositoriesByTopic', () => jest.fn());

const mockedGetRepositoriesByTopic = getRepositoriesByTopic as jest.Mock;

const mockResponse = {
  error: false,
  data: [
    {
      name: 'repository 1',
      svn_url: '',
      stargazers_count: 500,
      owner: {
        avatar_url: '',
      },
    },
    {
      name: 'repository 2',
      svn_url: '',
      stargazers_count: 500,
      owner: {
        avatar_url: '',
      },
    },
  ],
};

const mockErrorResponse = {
  error: true,
  data: null,
};

const topic = 'nodejs';

describe('<GithubTopics />', () => {
  let utils: RenderResult;

  afterEach(cleanup);

  describe('when a topic is selected', () => {
    beforeEach(() => {
      mockedGetRepositoriesByTopic.mockReturnValue(mockResponse);
    });
    it('calls the service function with the selected topic to fetch repositories', async () => {
      utils = render(<GithubTopics />);
      const select = screen.getByTestId('select');

      expect(mockedGetRepositoriesByTopic).toHaveBeenCalledTimes(0);
      await userEvent.selectOptions(select, topic);
      expect(mockedGetRepositoriesByTopic).toHaveBeenCalledTimes(1);
      expect(mockedGetRepositoriesByTopic).toHaveBeenCalledWith(topic);
    });

    describe('and repositories are fetched successfully', () => {
      it('shows fetched repositories', async () => {
        utils = render(<GithubTopics />);
        const select = screen.getByTestId('select');

        expect(screen.queryByText('repository 1')).not.toBeInTheDocument();
        await userEvent.selectOptions(select, topic);
        expect(screen.queryByText('repository 1')).toBeInTheDocument();
      });
    });

    describe('and an error occurs during the fetch', () => {
      beforeEach(() => {
        mockedGetRepositoriesByTopic.mockReturnValue(mockErrorResponse);
      });
      it('shows an error message', async () => {
        utils = render(<GithubTopics />);
        const select = screen.getByTestId('select');

        expect(screen.queryByText('repository 1')).not.toBeInTheDocument();
        await userEvent.selectOptions(select, topic);
        expect(screen.queryByText('repository 1')).not.toBeInTheDocument();
        expect(screen.getByText('An error occurred. Please try again.')).toBeInTheDocument();
      });
    });
  });
});
