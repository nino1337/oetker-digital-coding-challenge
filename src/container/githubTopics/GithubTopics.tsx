import Select from '@/components/select/Select';
import Results, { ResultItem } from '@/components/results/Results';
import selectItems from './data/selectItems';
import { useCallback, useEffect, useState } from 'react';
import { FidgetSpinner } from 'react-loader-spinner';
import Topics from './types/topics';
import getRepositoriesByTopic from '@/services/getRepositoriesByTopic';

import theme from '@/styles/theme';

const GithubTopics = () => {
  const [data, setData] = useState<ResultItem[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [topic, setTopic] = useState<Topics | ''>('');

  const handleTopicChange = (topic: Topics) => {
    setData(null);
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
      <FidgetSpinner
        visible={loading}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{
          margin: '0 auto',
          display: 'block',
        }}
        wrapperClass="dna-wrapper"
        ballColors={[theme.colors.primary, theme.colors.primary, theme.colors.primary]}
        backgroundColor={theme.colors.primary}
      />
      {error && <p>An error occurred. Please try again.</p>}
    </>
  );
};

export default GithubTopics;
