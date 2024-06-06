import {
  CalendarCheck,
  CaretLeft,
  ChatCircle,
  GithubLogo,
} from 'phosphor-react';
import './styles.sass';
import type { Issue } from '../../types/types';
import { calculateDateDifference } from '../../utils/utils';

interface PostHeaderProps {
  issue?: Issue;
}

export function PostHeader({ issue }: PostHeaderProps) {
  if (issue)
    return (
      <header className="header-wrapper">
        <nav className="top-nav">
          <a href="/">
            <span>
              <CaretLeft size={20} /> Back
            </span>
          </a>
          <a href="/">OPEN ON GITHUB</a>
        </nav>
        <h1>{issue.title}</h1>

        <nav className="bottom-nav">
          <a href="/">
            <GithubLogo size={16} weight="fill" /> {issue.user.login}
          </a>
          <span>
            <CalendarCheck size={16} weight="fill" />{' '}
            {calculateDateDifference(issue.created_at)}
          </span>
          <span>
            <ChatCircle size={16} weight="fill" /> {issue.comments}
          </span>
        </nav>
      </header>
    );
  return <h1>Error fetching issue details.</h1>;
}
