

export default function MovieDetails() {
    return (
        <main>
            <section id="details">
                <div id="banner">
                    <img src="https://images6.alphacoders.com/134/thumb-1920-1342672.jpeg" />
                </div>

                <div className="movie">
                    <div id="movie-info">
                        <h3>The Hunger Games: The Ballad of Songbirds and Snakes</h3>
                        <p><span>Genre: </span>Adventure Fiction</p>
                        <p><span>Year: </span>2023</p>
                        <p><span>Description: </span>Years before he becomes the tyrannical president of Panem, 18-year-old Coriolanus Snow remains the last hope for his fading lineage. With the 10th annual Hunger Games fast approaching, the young Snow becomes alarmed when he's assigned to mentor Lucy Gray Baird from District 12. Uniting their instincts for showmanship and political savvy, they race against time to ultimately reveal who's a songbird and who's a snake.</p>

                        <div className="buttons">
                            <a href="#" className="button">Edit</a>
                            <a href="#" className="button">Delete</a>
                        </div>
                    </div>

                    <div id="movie-trailer">
                        <iframe width="560" height="315"
                        src="https://www.youtube.com/embed/RDE6Uz73A7g?si=F1VWszAwMruAIRJd" 
                        title="YouTube video player" frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>
            </section>
        </main>
    );
}