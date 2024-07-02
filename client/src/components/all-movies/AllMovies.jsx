import { useEffect, useState } from "react";

import * as movieService from '../../services/movieService';
import SingleMovie from "./single-movie/SingleMovie";

export default function AllMovies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        movieService.getAll()
            .then(result => setMovies(result));
    }, []);

    console.log(movies);

    return (
        <main>
            <div className="all-movies">
                <div className="catalog-heading">
                    <h1>All movies</h1>
                </div>

                <div className="movies">
                    {movies.map(movie => (
                        <SingleMovie key={movie._id} {...movie} />
                    ))}
                </div>

                {movies.length === 0 && (
                <div className="no-movies">
                    <p>No movies added yet...</p>
                </div>
                )}

            </div>
        </main>
    );
}