export default function AddMovie() {
    return (
        <main>
            <section id="add-section">
                <form id="add">
                    <h1>Add Movie</h1>
        
                    <div id="wrapper">
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
        
                        <input type="submit" className="submit-btn" value="Add" />
                    </div>
                </form>
            </section>
        </main>
    );
}