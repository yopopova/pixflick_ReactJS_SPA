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

function App() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState({});

  const loginSubmitHandler = async (values) => {
    // TRY/CATCH
    const result = await authService.login(values.email, values.password);
    setAuth(result);
    navigate(Path.Home);
  };

  const values = {
    loginSubmitHandler,
    username: auth.username,
    email: auth.email,
    isAuthenticated: !!auth.username,
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
          </Routes>

          <Footer />
        </div>
    </AuthContext.Provider>
  );
}

export default App;