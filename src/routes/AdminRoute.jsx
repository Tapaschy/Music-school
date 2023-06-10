import { Navigate, useLocation } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useRole from "../hooks/useRole";


const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [role, userloading] = useRole();
    const location = useLocation();
    const userRole = role.role;
    console.log(userRole);

    // if(loading ){
    //     return <progress className="progress w-56"></progress>
    // }

    if (user && userRole === 'admin') {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default AdminRoute;