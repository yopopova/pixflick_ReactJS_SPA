export default function Login() {
    return (
        <main>
            <section id="login-section">
                <form id="login">
                    <h1>Log in to your account</h1>

                    <div id="wrapper">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="example@email.com" />

                        <label htmlFor="login-pass">Password:</label>
                        <input type="password" id="login-password" name="password" placeholder="**********" />

                        <input type="submit" className="submit-btn" value="Login" />

                        <p>Don't have a profile? <a href="#">Join us</a></p>
                    </div>
                </form>
            </section>
        </main>
    );
}