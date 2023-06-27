import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom"

import { UserContext } from "../../App";
import setAuthorizationHeader from "../../config/axios/setAuthorizationHeader";

interface User {
    username: string;
    access_token: string
}

const ProtectedRoute = () => {
    const navigate = useNavigate();
    const { setUserLogin } = useContext(UserContext);
    
    useEffect(() => {
        const userSession = sessionStorage.getItem("user_info");
        let user: User;
        
        if (userSession) {
            user = JSON.parse(userSession);
            setUserLogin(user);
            setAuthorizationHeader(user.access_token)
        } else {
            navigate("/login");
        }
    }, [])

    return (
        <Outlet />
    )
}

export default ProtectedRoute