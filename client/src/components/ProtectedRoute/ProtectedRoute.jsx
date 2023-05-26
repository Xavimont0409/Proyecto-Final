import { Navigate, Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "../Loading/Loading";
import { useEffect, useState } from "react";

const ProtectedRoute = () => {
    const userType = JSON.parse(localStorage.getItem("currentUser2"))
    const validate = JSON.parse(localStorage.getItem("state"))

if (validate && (userType === "Applicant" || userType === "Admin")) {
    return <Navigate to="/applicant"/>;
} 

if (validate && (userType === "Company" || userType === "Admin")) {
    return <Navigate to="/empresa"/>;
}

else {
    return <Outlet />;
}
};

export default ProtectedRoute;