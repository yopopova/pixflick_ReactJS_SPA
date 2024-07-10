import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import * as authService from '../../services/authService';
import AuthContext from "../../contexts/authContext";
import Path from "../../paths";
// import Home from "../home/Home";

export default function Logout() {
    const navigate = useNavigate();
    const { logoutHandler } = useContext(AuthContext);

    useEffect(() => {
        authService.logout()
        .then(() => {
            logoutHandler();
            navigate(Path.Home);
        })
        .catch(() => {
            logoutHandler();
            navigate('/login');
        })
    }, []);

    return null;
}