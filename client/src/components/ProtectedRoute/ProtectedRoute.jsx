import { Navigate, Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "../Loading/Loading";
import { useEffect, useState } from "react";

const ProtectedRoute = ({isAutenticate}) => {
    const userType = JSON.parse(localStorage.getItem("currentUser2"))
    const validate2 = JSON.parse(localStorage.getItem("state"))

if(!validate2){
    return <Loading />
}

else if (!isAutenticate && (userType?.profile === "Applicant" || userType?.profile === "Admin")) {
    return <Navigate to="/applicant"/>;
} 

else if (!isAutenticate && (userType?.profile === "Company" || userType?.profile === "Admin")) {
    return <Navigate to="/empresa"/>;
}

else {
    return <Outlet />;
}
};

export default ProtectedRoute;