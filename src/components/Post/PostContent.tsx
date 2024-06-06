import Markdown from 'react-markdown';
import './styles.sass';
import type { Issue } from '../../types/types';

interface PostContentProps {
  issue?: Issue;
}

export function PostContent({ issue }: PostContentProps) {
  return (
    <div className="post-content-wrapper">
      <Markdown>{issue?.body}</Markdown>
    </div>
  );
}
