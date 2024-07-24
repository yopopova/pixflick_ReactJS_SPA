import { useContext } from "react";
import { Link } from "react-router-dom";

import AuthContext from "../../contexts/authContext";

export default function Header() {
    const {
        isAuthenticated,
        username
    } = useContext(AuthContext);

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

                {!isAuthenticated && (
                    <div id="guest">
                        <Link to="/register">Register</Link>
                        <Link className="log" to="/login">Login</Link>
                    </div>
                )}

                {isAuthenticated && (
                    <div id="user">
                        <Link to="/movies/create">Add Movie</Link>
                        <Link to="/profile">{username}'s Profile</Link>
                        <Link className="log" to="/logout">Logout</Link>
                        <span style={{color: 'white'}}>{username}</span>
                    </div>
                )}
            </nav>
        </header>
    );
} 