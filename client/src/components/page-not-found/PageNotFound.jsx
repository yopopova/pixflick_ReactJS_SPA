import { Link } from "react-router-dom";

import Path from "../../paths";

export default function PageNotFound() {
    return (
        <main>
            <div id="error-page">
                <div id="error-text">
                    <h1>404</h1>
                    <h2>Skadoosh... The page you are looking for does not exist!</h2>

                    <div id="btns">
                        <Link to={Path.Home}>Home</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}