import { useContext, useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import movieDetailsStyles from './MovieDetails.module.css';

import * as movieService from '../../services/movieService';
import * as commentService from '../../services/commentService';
import AuthContext from "../../contexts/authContext";
import useForm from "../../hooks/useForm";
import { pathToUrl } from "../../utils/pathUtils";
import Path from "../../paths";

export default function MovieDetails() {
    const navigate = useNavigate();
    const { isAuthenticated, email, userId } = useContext(AuthContext);
    const [movie, setMovie] = useState({});
    const [comments, setComments] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        movieService.getOne(movieId)
            .then(setMovie)
            .catch(err => {
                console.log(err);
            });

        commentService.getAll(movieId)
            .then(setComments)
            .catch(err => {
                console.log(err);
            });
    }, [movieId]);

    const addCommentHandler = async (values) => {
        // e.preventDefault();
        // const formData = new FormData(e.currentTarget);

        // TRY-CATCH
        try {
            const newComment = await commentService.create(
                movieId,
                values.comment,
                // formData.get('comment'),
            );
            console.log(newComment);
    
            setComments(state => [...state, { ...newComment, owner: {email} }]);
        } catch (error) {
            console.log(error);
        }
    }

    const deleteButtonClickHandler = async () => {
        const hasConfirmed = confirm(`Are you sure you want to delete ${movie.title} movie record?`);

        if (hasConfirmed) {
            await movieService.remove(movieId);
            navigate('/movies');
        }
    }

    const {values, onChange, onSubmit} = useForm(addCommentHandler, {
        comment: '',
    });

    const isOwner = userId === movie._ownerId;

    return (
        <main className={movieDetailsStyles.details}>
            <div className={movieDetailsStyles.banner}>
                <img src={movie.wallpaper} alt={movie.title} />
            </div>

            <div className={movieDetailsStyles.movie}>
                <div className={movieDetailsStyles.info}>
                    <h1>{movie.title}</h1>
                    <p><span>Genre: </span>{movie.genre}</p>
                    <p><span>Year: </span>{movie.year}</p>
                    <p><span>Description: </span>{movie.description}</p>
                    
                    {isOwner && (
                        <div className={movieDetailsStyles.buttons}>
                            <Link className={movieDetailsStyles.button} to={pathToUrl(Path.Edit, { movieId })}>Edit</Link>
                            <button className={movieDetailsStyles.button} onClick={deleteButtonClickHandler}>Delete</button>
                        </div>
                    )}
                </div>

                <div className="trailer">
                    <iframe width="560" height="315"
                    src={movie.trailer} 
                    title="YouTube video player" frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </div>

            <div className={movieDetailsStyles.comments}>
                <h2>Comments</h2>

                <ul>
                    {comments.map(({ _id, text, owner: { email } }) => (
                        <li key={_id} className="comment">
                            <p>{email}:</p>
                            <p>{text}</p>
                        </li>
                    ))}
                </ul>
                
                {comments.length === 0 && (
                    <p className={movieDetailsStyles.empty}>There are no comments for this movie yet. Write the first one.</p>
                )}
            </div>

            <div className={movieDetailsStyles.create}>
                <h3>Like this movie? Share your impressions.</h3>

                {isAuthenticated && (
                    <form className={movieDetailsStyles.add} onSubmit={onSubmit}>
                        <textarea name="comment" rows="10" cols="68" value={values.comment} onChange={onChange} placeholder="Add a comment..."></textarea>
                        <input className={movieDetailsStyles.btn} type="submit" value="Add Comment" />
                    </form>
                )}
                
                {!isAuthenticated && (
                    <Link className={movieDetailsStyles.login} to={Path.Login}>Login</Link>
                )}
            </div>
        </main>
    );
}