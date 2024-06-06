import { useEffect, useState } from 'react';
import { getUserProfile } from '../services/githubApi';
import type { User } from '../types/types';

export const useProfile = (login: User['login']) => {
  const [profileData, setProfileData] = useState<User>();
  const [isLoading, setIsLoading] = useState(true);

  async function fetchProfileData() {
    try {
      const response = await getUserProfile(login);
      console.log(response);
      setProfileData(response);
    } catch {
      throw new Error();
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchProfileData();
  }, []);

  return { profileData, isLoading };
};
