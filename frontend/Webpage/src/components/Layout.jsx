import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopNavBar from './TopNavBar';
import Footer from './Footer';

const Layout = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';
  const isLandingPage = location.pathname === '/';

  if (isAuthPage || isLandingPage) {
    return <Outlet />;
  }

  return (
    <div className="flex min-h-screen bg-background text-on-background">
      <Sidebar />
      <main className="ml-64 flex-1 min-h-screen relative flex flex-col">
        <TopNavBar />
        <div className="flex-1 pt-20">
          <Outlet />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
