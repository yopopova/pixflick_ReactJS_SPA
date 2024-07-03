import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as movieService from '../../services/movieService';

export default function MovieDetails() {
    const [movie, setMovie] = useState({});
    const { movieId } = useParams();

    useEffect(() => {
        movieService.getOne(movieId)
            .then(setMovie)
    }, [movieId]);

    return (
        <main>
            <section id="details">
                <div id="banner">
                    <img src={movie.wallpaper} alt={movie.title} />
                </div>

                <div className="movie">
                    <div id="movie-info">
                        <h1>{movie.title}</h1>
                        <p><span>Genre: </span>{movie.genre}</p>
                        <p><span>Year: </span>{movie.year}</p>
                        <p><span>Description: </span>{movie.description}</p>

                        <div className="buttons">
                            <a href="#" className="button">Edit</a>
                            <a href="#" className="button">Delete</a>
                        </div>
                    </div>

                    <div id="movie-trailer">
                        <iframe width="560" height="315"
                        src={movie.trailer} 
                        title="YouTube video player" frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>

                <div className="movie-comments">
                    <h2>Comments</h2>

                    <ul>
                        <li className="comment">
                            <p>ivan@gmail.com:</p>
                            <p>I rate this one quite highly.</p>
                        </li>
                        <li className="comment">
                            <p>nadia@gmail.com:</p>
                            <p>The best movie.</p>
                        </li>
                    </ul>

                    <p className="no-comments">There are no comments for this movie yet. Write the first one...</p>
                </div>


            </section>
        </main>
    );
}