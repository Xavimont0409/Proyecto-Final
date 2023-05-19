import { Navigate, Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "../Loading/Loading";

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

    if (isLoading) {
        return <Loading />;
    }

    if (!isAuthenticated) {
        localStorage.setItem("redirectTo", window.location.pathname);
        loginWithRedirect();
        return null;
    }

    const storedRedirectTo = localStorage.getItem("redirectTo");
    if (storedRedirectTo) {
        localStorage.removeItem("redirectTo");
        return <Navigate to={storedRedirectTo} />;
    }

    return children ? children : <Outlet />;
};

export default ProtectedRoute;