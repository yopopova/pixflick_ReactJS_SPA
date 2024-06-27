export default function Header() {
    return (
        <header className="header">
            <div className="logo">
                <a href="#">
                    <span className="red">pix</span><span className="white">flick</span><span className="red">.</span>
                </a>
            </div>

            <nav className="nav">
                <a href="#">Home</a>
                <a href="#">Movies</a>

                <div id="guest">
                    <a href="#">Register</a>
                    <a className="log" href="#">Login</a>
                </div>

                <div id="user">
                    <a href="#">Add Movie</a>
                    <a className="log" href="#">Logout</a>
                </div>
            </nav>
        </header>
    );
}

