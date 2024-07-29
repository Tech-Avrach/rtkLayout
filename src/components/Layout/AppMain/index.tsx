import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import Login from '@/components/Login';
// import ProtectedRoutes from '@/routes/ProtectedRoures'; 
import ForgotPassword from '@/components/ForgotPassword';


const AppMain: React.FC = () => {
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();


    return (
        <div>
            <Routes>
                {/* <Route element={<ProtectedRoutes isLoggedIn={isLoggedIn} />}> */}
                    <Route path="/" element={<Layout />}>
                    </Route>
                {/* </Route> */}

                {/* <Route element={<publicRoutes isLoggedIn={isLoggedIn} />}> */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                {/* </Route> */}
            </Routes>
        </div>
    );
}

export default AppMain;
