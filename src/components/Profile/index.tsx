import { Buildings, GithubLogo, Share, Users } from 'phosphor-react';
import './styles.sass';
import type { User } from '../../types/types';

type ProfileProps = {
  userInfo: User;
};

export function Profile({ userInfo }: ProfileProps) {
  return (
    <div className="profile-wrapper">
      <div className="profile-container">
        <img src={userInfo.avatar_url} alt="github profile icon" />
        <div className="content-wrapper">
          <div className="content">
            <div className="name-github">
              <h1>{userInfo.name}</h1>
              <a className="open-on-github" href={userInfo.html_url}>
                <span>
                  GITHUB <Share size={20} weight="fill" />
                </span>
              </a>
            </div>
            {userInfo.bio}
          </div>
          <nav>
            <span>
              <GithubLogo size={16} weight="fill" /> {userInfo.login}
            </span>
            {userInfo.company ? (
              <span>
                <Buildings size={16} weight="fill" /> {userInfo.company}
              </span>
            ) : null}
            <span>
              <Users size={16} weight="fill" /> {userInfo.followers} followers
            </span>
          </nav>
        </div>
      </div>
    </div>
  );
}
