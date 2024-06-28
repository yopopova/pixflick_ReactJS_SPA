export default function Register() {
    return (
        <main>
            <section id="register-section">
                <form id="register">
                    <h1>Create an account</h1>

                    <div id="wrapper">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="example@email.com" />

                        <label htmlFor="register-pass">Password:</label>
                        <input type="password" id="register-password" name="password" placeholder="**********" />

                        <label htmlFor="con-pass">Confirm password:</label>
                        <input type="password" id="confirm-password" name="confirm-password" placeholder="**********" />

                        <input type="submit" className="submit-btn" value="Register" />

                        <p>Already have an account? <a href="#">Login</a></p>
                    </div>
                </form>
            </section>
        </main>
    );
}