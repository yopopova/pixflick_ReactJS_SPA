import { Link } from "react-router-dom";

import latestMovieStyles from './LatestMovie.module.css';

import { pathToUrl } from "../../../utils/pathUtils";
import Path from "../../../paths";

export default function LatestMovie({
    _id,
    title,
    genre,
    year,
    poster,
}) {
    return (
        <div className={latestMovieStyles.card}>
            <div className={latestMovieStyles.poster}>
                <img src={poster} alt={title} />
            </div>

            <div className={latestMovieStyles.info}>
                <h3>{title}</h3>
                <p>Genre: {genre}</p>
                <p>Year: {year}</p>
                <Link to={pathToUrl(Path.Details, { movieId: _id } )}>Details</Link>
            </div>
        </div>
    );
}