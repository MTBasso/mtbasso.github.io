import './styles.sass';
import {
  faAngleLeft,
  faUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { Issue } from '../../types/types';

interface PostHeaderProps {
  issue?: Issue;
}

export function PostHeader({ issue }: PostHeaderProps) {
  //   <nav className="bottom-nav">
  //   <a href="/">
  //     {/* <GithubLogo size={16} weight="fill" /> {issue.user.login} */}
  //   </a>
  //   <span>
  //     {/* <CalendarCheck size={16} weight="fill" />{' '} */}
  //     {calculateDateDifference(issue.created_at)}
  //   </span>
  //   <span>{/* <ChatCircle size={16} weight="fill" /> {issue.comments} */}</span>
  // </nav>;

  const color = '#AFC2D4';

  if (issue)
    return (
      <header className="header-wrapper">
        <nav className="top-nav">
          <a className="nav-back" href="/">
            <span>
              <FontAwesomeIcon size="xl" icon={faAngleLeft} style={{ color }} />
              <p>Back</p>
            </span>
          </a>
          <a className="nav-go-to-github" href="/">
            <span>
              <p>Open on Github</p>
              <FontAwesomeIcon
                size="lg"
                icon={faUpRightFromSquare}
                style={{ color }}
              />
            </span>
          </a>
        </nav>
        <h1>{issue.title}</h1>
      </header>
    );
  return <h1>Error fetching issue details.</h1>;
}
