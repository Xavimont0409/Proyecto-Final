import { Navigate, Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "../Loading/Loading";
import { useEffect, useState } from "react";

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
    const [redirectTo, setRedirectTo] = useState(null);

    useEffect(() => {
        if (!isAuthenticated && !isLoading) {
        const storedRedirectTo = localStorage.getItem('redirectTo');
        if (storedRedirectTo) {
            setRedirectTo(storedRedirectTo);
            localStorage.removeItem('redirectTo');
        }
        }
    }, [isAuthenticated, isLoading]);

    const handleLogin = () => {
        localStorage.setItem('redirectTo', window.location.pathname);
        loginWithRedirect();
    };

    if (isLoading) {
        return <Loading />;
    }

    if (!isAuthenticated) {
        return handleLogin();
    }

    if (redirectTo) {
        return <Navigate to={redirectTo} />;
    }

    return children ? children : <Outlet />;
};

export default ProtectedRoute;