// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';

import { Route, Routes } from 'react-router-dom';

import Header from './components/header/Header';
import Home from './components/home/Home';
import AllMovies from './components/all-movies/AllMovies';
import Register from './components/register/Register';
import Login from './components/login/Login';
import AddMovie from './components/add-movie/AddMovie';
import Footer from './components/footer/Footer';
import MovieDetails from './components/movie-details/MovieDetails';

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/movies' element={ <AllMovies /> } />
        <Route path='/register' element={ <Register /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/movies/create' element={ <AddMovie /> } />
        <Route path='/movies/:movieId' element={ <MovieDetails /> } />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;