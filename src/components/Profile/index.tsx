import './styles.sass';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { User } from '../../types/types';

type ProfileProps = {
  userInfo: User;
};

export function Profile({ userInfo }: ProfileProps) {
  const color = '#AFC2D4';
  return (
    <div className="profile-wrapper">
      <div className="profile-container">
        <img src={userInfo.avatar_url} alt="github profile icon" />
        <div className="content-wrapper">
          <div className="content">
            <h1>{userInfo.name}</h1>
            {userInfo.bio}
          </div>
          <nav>
            <span>
              <a href="https://www.linkedin.com/in/matheus-basso-5a2194223/">
                <FontAwesomeIcon
                  size="2x"
                  icon={faLinkedin}
                  style={{ color }}
                />
              </a>
            </span>
            <span>
              <FontAwesomeIcon
                size="2x"
                icon={faGithubSquare}
                style={{ color }}
              />
              <p>{userInfo.login}</p>
            </span>
            <span>
              <FontAwesomeIcon size="2x" icon={faEnvelope} style={{ color }} />
              <p>matheusbasso@protonmail.com</p>
            </span>
          </nav>
        </div>
      </div>
    </div>
  );
}
