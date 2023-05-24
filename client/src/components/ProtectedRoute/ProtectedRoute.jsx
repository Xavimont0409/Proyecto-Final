import { Navigate, Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "../Loading/Loading";
import { useEffect, useState } from "react";

const ProtectedRoute = ({ isAuthenticated, userType }) => {
    const {isLoading} = useAuth0();


    if (isLoading) {
        return <Loading />;
    } 

    else if (!isAuthenticated && (userType === "Applicant" || userType === "Admin")) {
        return <Navigate to="/applicant"/>;
    } 

    else if (!isAuthenticated && (userType === "Company" || userType === "Admin")) {
        return <Navigate to="/empresa"/>;
    }
    
    else {
        return <Outlet />;
    }
};

export default ProtectedRoute;