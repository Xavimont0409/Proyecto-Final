import { Navigate, Outlet } from "react-router-dom";
import Loading from "../Loading/Loading";
import { useEffect, useState } from "react";

const ProtectedRoute = ({ isAutenticate }) => {
    const userType = JSON.parse(localStorage.getItem("currentUser2"));
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2500);
    }, []);

    if (isLoading) {
        return (
            <>
                <Loading />
            </>
        );
    } else if (!isAutenticate && !userType) {
        return <Navigate to="/loginApplicant" />;
    } else if (!isAutenticate && (userType?.profile === "Applicant" || userType?.profile === "Admin")) {
        return <Navigate to="/applicant" />;
    } else if (!isAutenticate && userType?.profile === "Company") {
        return <Navigate to="/empresa" />;
    } else {
        return <Outlet />;
    }
};

export default ProtectedRoute;