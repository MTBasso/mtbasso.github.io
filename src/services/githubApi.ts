import axios from 'axios';
import type { User } from '../types/types';

const BASE_URL = 'https://api.github.com';

export async function getUserProfile(username: string): Promise<User> {
  const response = await axios.get(`${BASE_URL}/users/${username}`);
  // console.log(response.data);
  return response.data;
}

export async function getRepoIssues(repository_url: string) {
  const query = `repo:${repository_url}`;

  const response = await axios.get(`${BASE_URL}/search/issues`, {
    params: { q: query },
  });
  console.log(response);
  return response.data.items;
}
