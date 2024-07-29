import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import * as movieService from '../../services/movieService';
import LatestMovie from './latest-movie/LatestMovie';
import Path from '../../paths';

export default function Home() {
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
            <div id="hero-image">
                <div id="banner-text">
                    <h1>Dive into the cinema universe</h1>
        
                    <div id="btns">
                        <Link to={Path.Catalog}>Catalog</Link>
                    </div>
                </div>
            </div>
        
            <div className="latest-movies">
                <div className="heading">
                    <h1>Latest movies</h1>
                </div>
        
                <div className="films">
                    {latestMovies.map(movie => <LatestMovie key={movie._id} {...movie} />)}

                    {latestMovies.length === 0 && (
                        <div className="no-movies">
                            <p>No movies added yet...</p>
                        </div>
                    )}
                </div>

            </div>
        </main>
    );
}