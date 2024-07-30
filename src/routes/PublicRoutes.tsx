import React, { Suspense } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import Loader from '@/components/ui/loader';

interface PublicRoutesProps {
    isLoggedIn: boolean;
}

const PublicRoutes: React.FC<PublicRoutesProps> = ({ isLoggedIn }) => {
    return isLoggedIn ? (
        <Navigate to="/dashboard" replace />
    ) : (
        <Suspense fallback={<Loader />}>
            <Outlet />
        </Suspense>
    );
};

export default PublicRoutes;
