import useForm from "../../hooks/useForm";

const LoginFormKeys = {
    Email: 'email',
    Password: 'password',
}

export default function Login({
    loginSubmitHandler,
}) {
    const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: '',
    });

    return (
        <main>
            <section id="login-section">
                <form id="login" onSubmit={onSubmit}>
                    <h1>Log in to your account</h1>

                    <div id="wrapper">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email" 
                            id="email" 
                            name={LoginFormKeys.Email} 
                            placeholder="example@email.com" 
                            onChange={onChange} 
                            value={values[LoginFormKeys.Email]} 
                        />

                        <label htmlFor="login-pass">Password:</label>
                        <input 
                            type="password" 
                            id="login-password" 
                            name={LoginFormKeys.Password} 
                            placeholder="**********" 
                            onChange={onChange} 
                            value={values[LoginFormKeys.Password]} 
                        />

                        <input type="submit" className="submit-btn" value="Login" />

                        <p>Don't have a profile? <a href="#">Join us</a></p>
                    </div>
                </form>
            </section>
        </main>
    );
}