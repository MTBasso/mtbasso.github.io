import './styles.sass';
import type { Issue } from '../../types/types';
import { PostCard } from '../PostCard';

interface PostListProps {
  items: Issue[];
}

export function PostList({ items }: PostListProps) {
  return (
    <div className="posts-wrapper">
      {items.map((item) => {
        return <PostCard key={item.number} item={item} />;
      })}
    </div>
  );
}
