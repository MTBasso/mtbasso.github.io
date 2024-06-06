// import Markdown from 'react-markdown';
import { calculateDateDifference } from '../../utils/utils';
import './styles.sass';
import { Link } from 'react-router-dom';
import { StringFromMarkdown } from '../../entities/StringFromMarkdown';
import type { Issue } from '../../types/types';

interface PostCardProps {
  item: Issue;
}

export function PostCard({ item }: PostCardProps) {
  let itemBody: StringFromMarkdown;
  itemBody = StringFromMarkdown.createStringFromMarkdown('');
  if (item.body!)
    itemBody = StringFromMarkdown.createStringFromMarkdown(item.body);
  const linkToPost = `/post/${item.number}`;

  return (
    <div key={item.number} className="post-container">
      <header className="post-header">
        <Link to={linkToPost} state={item}>
          <h1>{item.title}</h1>
        </Link>
        <span>{calculateDateDifference(item.created_at)}</span>
      </header>
      <div className="post-body">
        {item.body ? <p>{itemBody.text}</p> : <p>test</p>}
      </div>
    </div>
  );
}
