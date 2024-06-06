import { useEffect, useState } from 'react';
import { getRepoIssues } from '../services/githubApi';
import type { Issue } from '../types/types';

export const useIssuesList = (repository_url: string) => {
  const [issueList, setIssueList] = useState<Issue[]>();
  const [isLoading, setIsLoading] = useState(true);

  async function fetchRepositoryIssues() {
    try {
      const response = await getRepoIssues(repository_url);
      setIssueList(response);
    } catch {
      throw new Error();
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchRepositoryIssues();
  }, []);

  return { issueList, isLoading };
};
