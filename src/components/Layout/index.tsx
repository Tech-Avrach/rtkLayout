import React from 'react';
import Nav from '@/components/Layout/AppNav';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <div className="flex w-full">
      <div className="flex-shrink-0">
        <Nav />
      </div>
      <div className="flex-grow p-5">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
