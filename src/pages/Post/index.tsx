// import { useParams } from 'react-router-dom';
import './styles.sass';
import { useLocation } from 'react-router-dom';
import { PostContent } from '../../components/Post/PostContent';
import { PostHeader } from '../../components/Post/PostHeader';
import type { Issue } from '../../types/types';

export function Post() {
  const location = useLocation();
  console.log(location.state);
  const issue: Issue = location.state;

  return (
    <div className="post-wrapper">
      <PostHeader issue={issue} />
      {issue.body ? <PostContent issue={issue} /> : null}
    </div>
  );
}
