import { useContext, useState, useEffect } from "react";

import AuthContext from "../../contexts/authContext";
import * as movieService from '../../services/movieService';
import SingleMovie from '../all-movies/single-movie/SingleMovie';

export default function Profile() {
    const { userId, username, avatar, email } = useContext(AuthContext);
    // console.log(userId);

    const [movies, setMovies] = useState([]);
    // console.log(movies);

    useEffect(() => {
        movieService.getUserMovies(userId)
            .then(setMovies)
            .catch(err => {
                console.log(err);
            });
    }, []);

    // console.log(movies);

    return (
        <main>
            <div className="my-profile">
                <div className="profile-heading">
                    <h1>Hello, {username}!</h1>
                </div>

                <div className="profile">
                    <div className="user-card">
                        <div className="user-img">
                            <img src={avatar} alt={`${username}'s avatar`} />
                        </div>

                        <div className="user-info">
                            <p><span>Username: </span>{username}</p>
                            <p><span>Email: </span>{email}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="all-movies">
                <div className="movies">
                    {movies.map(movie => (
                        <SingleMovie key={movie._id} {...movie} />
                    ))}
                </div>

                {/* {movies.length === 0 && (
                <div className="no-movies">
                    <p>No movies added yet...</p>
                </div>
                )} */}
            </div>
        </main>
    );
}