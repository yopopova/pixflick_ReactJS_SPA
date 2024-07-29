import { createContext } from "react";
import { useNavigate } from 'react-router-dom';

import * as authService from '../services/authService';
import usePersistedState from "../hooks/usePersistedState";
import Path from '../paths';

const AuthContext = createContext();

AuthContext.displayName = 'AuthContext';

export const AuthProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [auth, setAuth] = usePersistedState('auth', {});

    const loginSubmitHandler = async (values) => {
      // TRY/CATCH
      try {
        const result = await authService.login(values.email, values.password);
        setAuth(result);

        localStorage.setItem('accessToken', result.accessToken);
        navigate(Path.Home);
      } catch (error) {
        console.log(error);
      }
    };

    const registerSubmitHandler = async (values) => {
      // TRY/CATCH
      // Confirm the two passwords
      try {
        const result = await authService.register(values.username, values.avatar, values.email, values.password);
        setAuth(result);

        localStorage.setItem('accessToken', result.accessToken);
        navigate(Path.Home);
      } catch (error) {
        console.log(error);
      }
    }

    const logoutHandler = () => {
      setAuth({});
      localStorage.removeItem('accessToken');
    }

    // Here we add all things we want to have in the browser Application tab!
    const values = {
      loginSubmitHandler,
      registerSubmitHandler,
      logoutHandler,
      username: auth.username || auth.email,
      avatar: auth.avatar,
      email: auth.email,
      userId: auth._id,
      isAuthenticated: !!auth.accessToken,
    }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;