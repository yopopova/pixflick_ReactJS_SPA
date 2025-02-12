import { Link } from 'react-router-dom';

import singleMovieStyles from './SingleMovie.module.css';

export default function SingleMovie({
    _id,
    title,
    genre,
    year,
    poster
}) {
    return (
        <div className={singleMovieStyles.card}>
            <div className={singleMovieStyles.poster}>
                <img src={poster} alt={title} />
            </div>

            <div className={singleMovieStyles.info}>
                <h3>{title}</h3>
                <p>Genre: {genre}</p>
                <p>Year: {year}</p>
                <Link to={`/movies/${_id}`}>Details</Link>
            </div>
        </div>
    );
}