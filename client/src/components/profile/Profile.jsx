export default function Profile() {
    return (
        <main>
            <div className="my-profile">
                <div className="profile-heading">
                    <h1>My profile</h1>
                </div>

                <div className="profile">
                    <div className="user-card">
                        <div className="user-img">
                            <img src="https://discoverymood.com/wp-content/uploads/2020/04/Mental-Strong-Women-min.jpg" alt="maria" />
                        </div>

                        <div className="user-info">
                            <p><span>Username:</span> Maria</p>
                            <p><span>Email:</span> maria@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}