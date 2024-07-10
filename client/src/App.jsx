import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import * as authService from './services/authService';
import AuthContext from './contexts/authContext';
import Path from './paths';

import Header from './components/header/Header';
import Home from './components/home/Home';
import AllMovies from './components/all-movies/AllMovies';
import Register from './components/register/Register';
import Login from './components/login/Login';
import AddMovie from './components/add-movie/AddMovie';
import Footer from './components/footer/Footer';
import MovieDetails from './components/movie-details/MovieDetails';
import Logout from './components/logout/Logout';

function App() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(() => {
    localStorage.removeItem('accessToken');
    return {};
  });

  const loginSubmitHandler = async (values) => {
    // TRY/CATCH
    const result = await authService.login(values.email, values.password);

    setAuth(result);
    localStorage.setItem('accessToken', result.accessToken);

    navigate(Path.Home);
  };

  const registerSubmitHandler = async (values) => {
    // TRY/CATCH
    // Confirm the two passwords
    const result = await authService.register(values.email, values.password);

    setAuth(result);
    localStorage.setItem('accessToken', result.accessToken);

    navigate(Path.Home);
  }

  const logoutHandler = () => {
    setAuth({});
    localStorage.removeItem('accessToken');
  }

  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,
    username: auth.username || auth.email,
    email: auth.email,
    isAuthenticated: !!auth.accessToken,
  }

  return (
    <AuthContext.Provider value={values}>
        <div>
          <Header />

          <Routes>
            <Route path={Path.Home} element={<Home />} />
            <Route path='/movies' element={<AllMovies />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/movies/create' element={<AddMovie />} />
            <Route path='/movies/:movieId' element={<MovieDetails />} />
            <Route path={Path.Logout} element={<Logout />} />
          </Routes>

          <Footer />
        </div>
    </AuthContext.Provider>
  );
}

export default App;