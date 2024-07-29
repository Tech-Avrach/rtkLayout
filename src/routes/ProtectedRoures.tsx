import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

interface ProtectedRoutesProps {
    isLoggedIn: boolean;
}

const ProtectedRoutes: React.FC<ProtectedRoutesProps> = ({ isLoggedIn }) => {
    const navigate = useNavigate();

    React.useEffect(() => {
        if (!isLoggedIn) {
            navigate('/login');
        }
    }, [isLoggedIn, navigate]);

    return (
        <div>
            {isLoggedIn ? <Outlet /> : null}
        </div>
    );
}

export default ProtectedRoutes;
