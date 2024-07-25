import { useContext } from "react";

import AuthContext from "../../contexts/authContext";

export default function Profile() {
    const { username, avatar, email } = useContext(AuthContext);
    // console.log(username);

    return (
        <main>
            <div className="my-profile">
                <div className="profile-heading">
                    <h1>Hello, {username}!</h1>
                </div>

                <div className="profile">
                    <div className="user-card">
                        <div className="user-img">
                            <img src={avatar} alt={`${username}'s avatar`} />
                        </div>

                        <div className="user-info">
                            <p><span>Username: </span>{username}</p>
                            <p><span>Email: </span>{email}</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}