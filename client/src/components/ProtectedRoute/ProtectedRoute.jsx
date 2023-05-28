import { Navigate, Outlet } from "react-router-dom";
import Loading from "../Loading/Loading";

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