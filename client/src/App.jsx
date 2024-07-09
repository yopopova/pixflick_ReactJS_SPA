import { Route, Routes } from 'react-router-dom';

import Header from './components/header/Header';
import Home from './components/home/Home';
import AllMovies from './components/all-movies/AllMovies';
import Register from './components/register/Register';
import Login from './components/login/Login';
import AddMovie from './components/add-movie/AddMovie';
import Footer from './components/footer/Footer';
import MovieDetails from './components/movie-details/MovieDetails';
import { useState } from 'react';

function App() {
  const [auth, setAuth] = useState({});

  const loginSubmitHandler = (values) => {
    console.log(values);
  };

  return (
    <div>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<AllMovies />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login loginSubmitHandler={loginSubmitHandler} />} />
        <Route path='/movies/create' element={<AddMovie />} />
        <Route path='/movies/:movieId' element={<MovieDetails />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;