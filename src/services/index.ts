import Topics from '@/container/types/topics';

import instance from './config';

interface Response {
  data:
    | {
        name: string;
        url: string;
        githubStars: string;
        avatarUrl: string;
      }[]
    | null;
  error: boolean;
}

interface Services {
  getRepositoriesByTopic: (topic: Topics) => Promise<Response>;
}

const services: Services = {
  getRepositoriesByTopic: async (topic: Topics) => {
    try {
      const response = await instance.get(
        `/search/repositories?q=topic:${topic}&sort=stars&order=desc&per_page=10`
      );

      if (response.status !== 200) {
        throw new Error('An error occurred.');
      }

      if (response.data) {
        const mappedData = response.data.items((item) => ({
          name: item.name,
          url: item.svn_url,
          githubStars: item.stargazers_count,
        }));

        return {
          error: false,
          data: mappedData,
        };
      }
    } catch (error) {
      return { data: null, error: true };
    }
  },
};

export default services;
