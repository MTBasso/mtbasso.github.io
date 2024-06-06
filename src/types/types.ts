export interface User {
  login: string;
  avatar_url: string;
  name: string;
  html_url: string;
  bio: string;
  company: string;
  followers: string;
}

export interface Issue {
  number: number;
  repository_url: string;
  title: string;
  body: string;
  html_url: string;
  comments: number;
  created_at: string;
  user: User;
}
