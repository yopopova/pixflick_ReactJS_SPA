import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import * as movieService from "../../services/movieService";
import useForm from '../../hooks/useForm';

export default function EditMovie() {
    const navigate = useNavigate();
    const { movieId } = useParams();
    const [movie, setMovie] = useState({
        title: '',
        genre: '',
        year: '',
        poster: '',
        wallpaper: '',
        trailer: '',
        description: '',
    });

    useEffect(() => {
        movieService.getOne(movieId)
            .then(result => {
                setMovie(result);
            });
    }, [movieId]);

    const editMovieSubmitHandler = async (values) => {
        try {
            await movieService.edit(movieId, values);
            navigate('/movies');
        } catch (error) {
            // ERROR notification
            console.log(error);
        }
    }

    const { values, onChange, onSubmit } = useForm(editMovieSubmitHandler, movie);

    return (
        <main>
            <section id="add-section">
                <form id="add" onSubmit={onSubmit}>
                    <h1>Edit Movie</h1>
        
                    <div id="wrapper">
                        <label htmlFor="title">Title:</label>
                        <input type="text" id="title" name="title" value={values.title} onChange={onChange} placeholder="Enter title" />
        
                        <label htmlFor="genre">Genre:</label>
                        <input type="text" id="genre" name="genre" value={values.genre} onChange={onChange} placeholder="Enter genre" />
        
                        <label htmlFor="year">Year:</label>
                        <input type="text" id="year" name="year" value={values.year} onChange={onChange} placeholder="Enter year" />
        
                        <label htmlFor="poster">Poster:</label>
                        <input type="text" id="poster" name="poster" value={values.poster} onChange={onChange} placeholder="Add poster link" />
        
                        <label htmlFor="wallpaper">Wallpaper:</label>
                        <input type="text" id="wallpaper" name="wallpaper" value={values.wallpaper} onChange={onChange} placeholder="Add wallpaper link" />
        
                        <label htmlFor="trailer">Trailer (embedded link):</label>
                        <input type="text" id="trailer" name="trailer" value={values.trailer} onChange={onChange} placeholder="Add trailer link" />
        
                        <label htmlFor="description">Description:</label>
                        <textarea id="description" name="description" rows="5" cols="34" value={values.description} onChange={onChange} placeholder="Add description"></textarea>
        
                        <input type="submit" className="submit-btn" value="Edit" />
                    </div>
                </form>
            </section>
        </main>
    );
}