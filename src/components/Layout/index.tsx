import React from 'react';
import Nav from '@/components/Layout/AppNav';
import { Outlet } from 'react-router-dom';
import Header from './AppHeader';

const Layout: React.FC = () => {
  return (
    <>
      <div className='fixed top-0 w-full'>
        <Header />
      </div>
      <div className='flex fixed w-full top-[4.25rem]'>
        <div className=''>
          <Nav />
        </div>
        <div className='w-full h-screen overflow-scroll'>
        <Outlet />
        </div>
      </div>
    </>
  );
}

export default Layout;
