// import { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import ForgotPassword from '@/components/ForgotPassword';
// import Header from './components/AppHeader';
import Nav from './components/Layout/AppNav';
import Login from './components/Login';
// import SideBar from '@/components/AppSidebar';

function App() {


  return (
    <div className=''>
      <Login />
      {/* <ForgotPassword/> */}
      {/* <Header /> */}
      <Nav/>
    </div>
  );
}

export default App;
