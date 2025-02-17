import { useContext, useState, useEffect } from "react";

import profileStyles from './Profile.module.css';

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
            <div className={profileStyles.page}>
                <div className={profileStyles.heading}>
                    <h1>Hello, {username}!</h1>
                </div>

                <div className={profileStyles.profile}>
                    <div className={profileStyles.card}>
                        <div className={profileStyles.avatar}>
                            <img src={avatar} alt={`${username}'s avatar`} />
                        </div>

                        <div className={profileStyles.info}>
                            <p><span>Username: </span>{username}</p>
                            <p><span>Email: </span>{email}</p>
                        </div>
                    </div>                    
                </div>

                <div className={profileStyles.heading}>
                    <h1>Your Movies</h1>
                </div>

                <div className={profileStyles.movies}>
                    {movies.map(movie => (
                        <SingleMovie key={movie._id} {...movie} />
                    ))}
                </div>

                {movies.length === 0 && (
                    <div className={profileStyles.empty}>
                        <p>You have no movies added yet.</p>
                    </div>
                )}
            </div>
        </main>
    );
}