import Select from '@/components/select/Select';
import Results from '@/components/results/Results';
import selectItems from './data/selectItems';
import { useEffect, useState } from 'react';

import Topics from '../types/topics';
import services from '@/services';

const GithubTopics = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [topic, setTopic] = useState<Topics | ''>('');

  useEffect(() => {
    if (topic) {
      fetchRepositoriesFromTopics(topic);
    }
  }, [topic]);

  const handleTopicChange = (topic: Topics) => {
    setTopic(topic);
  };

  const fetchRepositoriesFromTopics = async (topic: Topics) => {
    const repositories = await services.getRepositoriesByTopic(topic);
  };
  return (
    <>
      <Select items={selectItems} onChange={handleTopicChange} />
      {data && JSON.stringify(data)}
      {loading && '...loading'}
      {error && 'An error occurred. Please try again.'}
    </>
  );
};

export default GithubTopics;
