import useForm from "../../hooks/useForm";

export default function Login() {
    const { values, onChange, onSubmit } = useForm({
        email: '',
        password: '',
    });

    return (
        <main>
            <section id="login-section">
                <form id="login" onSubmit={onSubmit}>
                    <h1>Log in to your account</h1>

                    <div id="wrapper">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="example@email.com" onChange={onChange} value={values.email} />

                        <label htmlFor="login-pass">Password:</label>
                        <input type="password" id="login-password" name="password" placeholder="**********" onChange={onChange} value={values.password} />

                        <input type="submit" className="submit-btn" value="Login" />

                        <p>Don't have a profile? <a href="#">Join us</a></p>
                    </div>
                </form>
            </section>
        </main>
    );
}