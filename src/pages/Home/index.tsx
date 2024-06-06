import { PostList } from '../../components/PostList';
import { Profile } from '../../components/Profile';
import { useIssuesList } from '../../hooks/useIssuesList';
import { useProfile } from '../../hooks/useProfile';
import './styles.sass';

export function Home() {
  const login = 'MTBasso';
  const { profileData, isLoading } = useProfile(login);

  const { issueList } = useIssuesList(`${login}/issues`);

  if (!isLoading && profileData) {
    return (
      <div className="home-wrapper">
        <Profile userInfo={profileData} />
        {issueList && <PostList items={issueList} />}
      </div>
    );
  }
  return <h1>Loading...</h1>;
}
