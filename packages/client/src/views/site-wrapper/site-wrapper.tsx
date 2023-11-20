import { Outlet } from 'react-router';

export function SiteWrapper() {
  return (
    <div>
      Wrapper
      <Outlet />
    </div>
  );
}
