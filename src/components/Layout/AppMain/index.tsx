import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import ProtectedRoutes from '@/routes/ProtectedRoutes'; 
import PublicRoutes from '@/routes/PublicRoutes';

import Layout from '@/components/Layout';
import Login from '@/components/Login';
import ForgotPassword from '@/components/ForgotPassword';
import Dashboard from '@/components/DashBoard';
import ResetPassword from '@/components/ResetPassword';

import UserList from '@/components/User/All';
// import People from '@/components/Payments/DemoPage';

const AppMain: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    return (
        <div>
            <Routes>
                <Route element={<ProtectedRoutes isLoggedIn={isLoggedIn} />}>
                    <Route element={<Layout />}>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path='user'>
                            <Route path='list' element={<UserList />} />
                        </Route>
                    

                    </Route>
                </Route>

                <Route element={<PublicRoutes isLoggedIn={isLoggedIn} />}>
                    <Route path="login" element={<Login />} />
                    <Route path="forgot-password" element={<ForgotPassword />} />
                    <Route path="reset-password" element={<ResetPassword />} />
                    <Route path="/" element={<Login />} />
                </Route>
            </Routes>
        </div>
    );
}

export default AppMain;
