import React, { useEffect, Suspense } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Loader from '@/components/ui/loader';


interface ProtectedRoutesProps {
    isLoggedIn: boolean;
}

const ProtectedRoutes: React.FC<ProtectedRoutesProps> = ({ isLoggedIn }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/login');
        }
    }, [isLoggedIn, navigate]);

    return isLoggedIn ? (
        <Suspense fallback={
            <div>
                <Loader/>
            </div>
            }
        >
            <Outlet />
        </Suspense>
    ) : null
}

export default ProtectedRoutes;
