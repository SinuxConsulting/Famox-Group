import { Outlet, useLocation, Navigate } from 'react-router-dom';
import { demoAdminIsAuthed } from '@/demo/demoStore';
import AdminLoginPage from '../pages/AdminLoginPage';

export default function AdminGate() {
  const location = useLocation();
  const authed = demoAdminIsAuthed();

  // If user is navigating directly to /admin and isn't logged in, show login page.
  if (!authed && location.pathname === '/admin') {
    return <AdminLoginPage />;
  }

  // If not logged in and trying to access subroutes, bounce back to /admin (login)
  if (!authed) {
    return <Navigate to="/admin" replace state={{ from: location.pathname }} />;
  }

  return <Outlet />;
}
