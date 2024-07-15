import { useContext, useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import * as movieService from '../../services/movieService';
import * as commentService from '../../services/commentService';
import AuthContext from "../../contexts/authContext";
import useForm from "../../hooks/useForm";
import { pathToUrl } from "../../utils/pathUtils";
import Path from "../../paths";

export default function MovieDetails() {
    const navigate = useNavigate();
    const { email, userId } = useContext(AuthContext);
    const [movie, setMovie] = useState({});
    const [comments, setComments] = useState([]);
    const { movieId } = useParams();
    // const {} = useForm()

    useEffect(() => {
        movieService.getOne(movieId)
            .then(setMovie);

        commentService.getAll(movieId)
            .then(setComments);
    }, [movieId]);

    const addCommentHandler = async (values) => {
        // e.preventDefault();

        // const formData = new FormData(e.currentTarget);

        // TRY-CATCH
        const newComment = await commentService.create(
            movieId,
            values.comment,
            // formData.get('comment'),
        );
        console.log(newComment);

        setComments(state => [...state, { ...newComment, owner: {email} }]);
    }

    const deleteButtonClickHandler = async () => {
        const hasConfirmed = confirm(`Are you sure you want to delete ${movie.title} movie record?`);

        if (hasConfirmed) {
            await movieService.remove(movieId);
            navigate('/movies');
        }
    }

    const initialValues = useMemo(() => ({
        comment: '',
    }), []);

    const {values, onChange, onSubmit} = useForm(addCommentHandler, initialValues);

    const isOwner = userId === movie._ownerId;

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

                        {isOwner && (
                            <div className="buttons">
                                <Link to={pathToUrl(Path.Edit, { movieId })} className="button">Edit</Link>
                                <button className="button" onClick={deleteButtonClickHandler}>Delete</button>
                            </div>
                        )}
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
                        {comments.map(({ _id, text, owner: { email } }) => (
                            <li key={_id} className="comment">
                                <p>{email}:</p>
                                <p>{text}</p>
                            </li>
                        ))}
                    </ul>
                    
                    {comments.length === 0 && (
                        <p className="no-comments">There are no comments for this movie yet. Write the first one...</p>
                    )}
                </div>

                <div className="create-comment">
                    <h3>Like this movie? Share your impressions:</h3>

                    <form id="add-comment" onSubmit={onSubmit}>
                        <textarea name="comment" rows="10" cols="68" value={values.comment} onChange={onChange} placeholder="Add a comment..."></textarea>
                        <input className="comment-btn" type="submit" value="Add Comment" />
                    </form>
                </div>
            </section>
        </main>
    );
}