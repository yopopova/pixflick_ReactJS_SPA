import { Route, Routes } from 'react-router-dom';

import { AuthProvider } from './contexts/authContext';
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
    return (
        <AuthProvider>
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
        </AuthProvider>
    );
}

export default App;