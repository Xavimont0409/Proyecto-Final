import { Navigate, Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "../Loading/Loading";
import { useEffect, useState } from "react";

const ProtectedRoute = ( { validateState }) => {
    const userType = JSON.parse(localStorage.getItem("currentUser"))

console.log(userType);

    /*     if (validateState) {
        return <Loading to="/"/>;
    }  */

    if (validateState === true && (userType[0] === "Applicant" || userType[0] === "Admin")) {
        return <Navigate to="/applicant"/>;
    } 

    if (validateState === true && (userType[0] === "Company" || userType[0] === "Admin")) {
        return <Navigate to="/empresa"/>;
    }
    return <Navigate to="/"  />
};

export default ProtectedRoute;