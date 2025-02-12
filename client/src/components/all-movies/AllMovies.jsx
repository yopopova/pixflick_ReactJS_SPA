import { useEffect, useState } from "react";

import catalogStyles from './AllMovies.module.css';

import * as movieService from '../../services/movieService';
import SingleMovie from "./single-movie/SingleMovie";

export default function AllMovies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        movieService.getAll()
            .then(result => setMovies(result))
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <main>
            <div className={catalogStyles.catalog}>
                <div className={catalogStyles.heading}>
                    <h1>All movies</h1>
                </div>

                <div className={catalogStyles.movies}>
                    {movies.map(movie => (
                        <SingleMovie key={movie._id} {...movie} />
                    ))}
                </div>

                {movies.length === 0 && (
                    <div className={catalogStyles.empty}>
                        <p>No movies added yet...</p>
                    </div>
                )}
            </div>
        </main>
    );
}