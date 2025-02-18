import { Link } from "react-router-dom";

import notFoundStyles from './PageNotFound.module.css';

import Path from "../../paths";

export default function PageNotFound() {
    return (
        <main>
            <div className={notFoundStyles.page}>
                <div className={notFoundStyles.text}>
                    <h1>404</h1>
                    <h2>Skadoosh... The page you are looking for does not exist!</h2>

                    <div className={notFoundStyles.btn}>
                        <Link to={Path.Home}>Home</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}