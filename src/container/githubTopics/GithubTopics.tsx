import { useCallback, useEffect, useState } from 'react';

import LoadingSpinner from '@/components/loadingSpinner/LoadingSpinner';
import Results, { ResultItem } from '@/components/results/Results';
import Select from '@/components/select/Select';
import getRepositoriesByTopic from '@/services/getRepositoriesByTopic';
import selectItems from './data/selectItems';
import Topics from './types/topics';

const GithubTopics = () => {
  const [data, setData] = useState<ResultItem[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [topic, setTopic] = useState<Topics | ''>('');

  const handleTopicChange = (topic: Topics) => {
    setData(null);
    setError(false);
    setTopic(topic);
  };

  const fetchRepositoriesFromTopics = useCallback(async (topic: Topics) => {
    setLoading(true);
    const { data: repositories, error: requestError } = await getRepositoriesByTopic(topic);

    if (requestError) {
      setError(true);
    }

    if (repositories) {
      const mappedRepositories: ResultItem[] = repositories.map(
        ({ name, stargazers_count, svn_url, owner }) => ({
          name,
          githubStars: stargazers_count,
          img: owner.avatar_url ?? null,
          imgAlt: `${name} avatar`,
          href: svn_url,
        })
      );

      setData(mappedRepositories);
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    if (topic) {
      fetchRepositoriesFromTopics(topic);
    }
  }, [topic, fetchRepositoriesFromTopics]);

  return (
    <>
      <Select items={selectItems} onChange={handleTopicChange} />
      {data && <Results items={data} />}
      <LoadingSpinner visible={loading} />
      {error && <p>An error occurred. Please try again.</p>}
    </>
  );
};

export default GithubTopics;
