import { useState, useEffect } from 'react';
import { githubApi } from '../services/githubApi.js';

export const useGitHubData = (username, enabled = true) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!enabled || !username) {
      return;
    }

    let mounted = true;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const result = await githubApi.fetchUserData(username);
        
        if (mounted) {
          setData(result);
          if (result.error) {
            setError('Unable to fetch latest GitHub data');
          }
        }
      } catch (err) {
        if (mounted) {
          setError(err.message);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      mounted = false;
    };
  }, [username, enabled]);

  return { data, loading, error };
};