import { useEffect, useState, useContext } from 'react';
import { Link } from "react-router-dom";

import homeStyles from './Home.module.css';

import * as movieService from '../../services/movieService';
import LatestMovie from './latest-movie/LatestMovie';
import AuthContext from "../../contexts/authContext";
import Path from '../../paths';

export default function Home() {
    const { isAuthenticated } = useContext(AuthContext);

    const [latestMovies, setLatestMovies] = useState([]);

    useEffect(() => {
        movieService.getLatest()
            .then(result => setLatestMovies(result))
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <main>
            <div className={homeStyles.banner}>
                <div className={homeStyles.text}>
                    <h1>Dive into the cinema universe</h1>
        
                    <div className={homeStyles.btns}>
                        <Link to={Path.Catalog}>Catalog</Link>

                        {!isAuthenticated && (
                            <Link to={Path.Register}>Join us</Link>
                        )}
                    </div>
                </div>
            </div>
        
            <div className={homeStyles.latest}>
                <div className={homeStyles.heading}>
                    <h1>Latest movies</h1>
                </div>
        
                <div className={homeStyles.films}>
                    {latestMovies.map(movie => <LatestMovie key={movie._id} {...movie} />)}

                    {latestMovies.length === 0 && (
                        <div className={homeStyles.empty}>
                            <p>No movies added yet...</p>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}