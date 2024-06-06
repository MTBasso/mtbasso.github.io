import { Outlet } from 'react-router-dom';
import './styles/default.sass';

export function App() {
  return (
    <>
      <div className="wrapper">
        <Outlet />
      </div>
    </>
  );
}
