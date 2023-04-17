import Topics from '@/container/githubTopics/types/topics';

import instance from './config';

type Item = {
  name: string;
  svn_url: string;
  stargazers_count: number;
  owner: {
    avatar_url?: string;
  };
};

type Response =
  | {
      data: Item[];
      error: false;
    }
  | {
      data: null;
      error: true;
    };

const getRepositoriesByTopic: (topic: Topics) => Promise<Response> = async (topic: Topics) => {
  try {
    const response = await instance.get(
      `/search/repositories?q=topic:${topic}&sort=stars&order=desc&per_page=10`
    );

    if (response.status !== 200 || !response.data) {
      throw new Error('An error occurred.');
    }

    return {
      error: false,
      data: response.data.items,
    };
  } catch (error) {
    return { data: null, error: true };
  }
};

export default getRepositoriesByTopic;
