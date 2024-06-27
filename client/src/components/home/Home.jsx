export default function Home() {
    return (
        <main>
            <div id="hero-image">
                <div id="banner-text">
                    <h1>Dive into the cinema universe</h1>
        
                    <div id="btns">
                        <a href="#">Catalog</a>
                        <a href="#">Join us</a>
                    </div>
                </div>
            </div>
        
            <div className="latest-movies">
                <div className="heading">
                    <h1>Latest movies</h1>
                </div>
        
                <div className="films">
                    <div className="film-card">
                        <div className="film-img">
                            <img src="https://m.media-amazon.com/images/M/MV5BOTZmMmY2MzctMjU2Yy00YjJlLTk1NjAtY2U4MmMxOWZkZWY4XkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_.jpg" alt="the-hunger-games" />
                        </div>
        
                        <div className="film-info">
                            <h3>The Hunger Games: The Ballad of Songbirds and Snakes</h3>
                            <p>Genre: Adventure Fiction</p>
                            <p>Year: 2023</p>
                            <a href="#">Details</a>
                        </div>
                    </div>
        
                    <div className="film-card">
                        <div className="film-img">
                            <img src="https://m.media-amazon.com/images/M/MV5BZjZkNThjNTMtOGU0Ni00ZDliLThmNGUtZmMxNWQ3YzAxZTQ1XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg" alt="the-boy-and-the-heron" />
                        </div>
        
                        <div className="film-info">
                            <h3>The Boy and the Heron</h3>
                            <p>Genre: Anime</p>
                            <p>Year: 2023</p>
                            <a href="#">Details</a>
                        </div>
                    </div>
        
                    <div className="film-card">
                        <div className="film-img">
                            <img src="https://picfiles.alphacoders.com/564/564992.jpg" alt="the-nun-2" />
                        </div>
        
                        <div className="film-info">
                            <h3>The Nun 2</h3>
                            <p>Genre: Horror</p>
                            <p>Year: 2023</p>
                            <a href="#">Details</a>
                        </div>
                    </div>
                </div>

                <div className="no-movies">
                    <p>No movies added yet...</p>
                </div>
            </div>
        </main>
    );
}