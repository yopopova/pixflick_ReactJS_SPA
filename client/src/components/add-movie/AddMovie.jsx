import { useNavigate } from 'react-router-dom';

import addMovieStyles from './AddMovie.module.css';

import * as movieService from "../../services/movieService";

export default function AddMovie() {
    const navigate = useNavigate();

    const craeteMovieSubmitHandler = async (e) => {
        e.preventDefault();

        const movieData = Object.fromEntries(new FormData(e.currentTarget));
        // console.log(movieData);

        try {
            await movieService.create(movieData);
            navigate('/movies');
        } catch (error) {
            // ERROR notification
            console.log(error);
        }
    }

    return (
        <main>
            <section className={addMovieStyles.add}>
                <form className={addMovieStyles.form} onSubmit={craeteMovieSubmitHandler}>
                    <h1>Add Movie</h1>
        
                    <div className={addMovieStyles.wrapper}>
                        <label htmlFor="title">Title:</label>
                        <input type="text" id="title" name="title" placeholder="Enter title" />
        
                        <label htmlFor="genre">Genre:</label>
                        <input type="text" id="genre" name="genre" placeholder="Enter genre" />
        
                        <label htmlFor="year">Year:</label>
                        <input type="text" id="year" name="year" placeholder="Enter year" />
        
                        <label htmlFor="poster">Poster:</label>
                        <input type="text" id="poster" name="poster" placeholder="Add poster link" />
        
                        <label htmlFor="wallpaper">Wallpaper:</label>
                        <input type="text" id="wallpaper" name="wallpaper" placeholder="Add wallpaper link" />
        
                        <label htmlFor="trailer">Trailer (embedded link):</label>
                        <input type="text" id="trailer" name="trailer" placeholder="Add trailer link" />
        
                        <label htmlFor="description">Description:</label>
                        <textarea id="description" name="description" rows="5" cols="34" placeholder="Add description"></textarea>
        
                        <input type="submit" className={addMovieStyles.submit} value="Add" />
                    </div>
                </form>
            </section>
        </main>
    );
}