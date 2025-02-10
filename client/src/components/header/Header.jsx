import { useContext } from "react";
import { Link } from "react-router-dom";

import headerStyles from './Header.module.css';
import AuthContext from "../../contexts/authContext";

export default function Header() {
    const {
        isAuthenticated,
        username
    } = useContext(AuthContext);

    return (
        <header className={headerStyles.header}>
            <div className={headerStyles.logo}>
                <Link to="/">
                    <span className={headerStyles.red}>pix</span>
                    <span className={headerStyles.white}>flick</span>
                    <span className={headerStyles.red}>.</span>
                </Link>
            </div>

            <nav className={headerStyles.nav}>
                <Link to="/">Home</Link>
                <Link to="/movies">Movies</Link>

                {!isAuthenticated && (
                    <div className={headerStyles.guest}>
                        <Link to="/register">Register</Link>
                        <Link to="/login" className={headerStyles.log}>Login</Link>
                    </div>
                )}

                {isAuthenticated && (
                    <div className={headerStyles.user}>
                        <Link to="/movies/create">Add Movie</Link>
                        <Link to="/profile">My Profile</Link>
                        <Link to="/logout" className={headerStyles.log}>Logout</Link>
                    </div>
                )}
            </nav>
        </header>
    );
} 