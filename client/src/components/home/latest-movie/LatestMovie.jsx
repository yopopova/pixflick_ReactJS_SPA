import { Link } from "react-router-dom";
import Path from "../../../paths";
import { pathToUrl } from "../../../utils/pathUtils";

export default function LatestMovie({
    _id,
    title,
    genre,
    year,
    poster,
}) {
    return (
        <div className="film-card">
            <div className="film-img">
                <img src={poster} alt={title} />
            </div>

            <div className="film-info">
                <h3>{title}</h3>
                <p>Genre: {genre}</p>
                <p>Year: {year}</p>
                <Link to={pathToUrl(Path.Details, { movieId: _id } )}>Details</Link>
            </div>
        </div>
    );
}