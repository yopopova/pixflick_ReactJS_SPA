import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="header">
            <div className="logo">
                <Link to="/">
                    <span className="red">pix</span><span className="white">flick</span><span className="red">.</span>
                </Link>
            </div>

            <nav className="nav">
                <Link to="/">Home</Link>
                <Link to="/movies">Movies</Link>

                <div id="guest">
                    <Link to="/register">Register</Link>
                    <Link className="log" to="/login">Login</Link>
                </div>

                <div id="user">
                    <Link to="/movies/create">Add Movie</Link>
                    <Link className="log" to="/logout">Logout</Link>
                </div>
            </nav>
        </header>
    );
}

