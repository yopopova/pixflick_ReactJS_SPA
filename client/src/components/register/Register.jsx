import { useContext } from "react";

import AuthContext from "../../contexts/authContext";
import useForm from "../../hooks/useForm";

const RegisterFormKeys = {
    Email: 'email',
    Password: 'password',
    ConfirmPassword: 'confirm-password',
}

export default function Register() {
    const { registerSubmitHandler } = useContext(AuthContext);

    const {values, onChange, onSubmit} = useForm(registerSubmitHandler, {
        [RegisterFormKeys.Email]: '',
        [RegisterFormKeys.Password]: '',
        [RegisterFormKeys.ConfirmPassword]: '',
    });

    return (
        <main>
            <section id="register-section">
                <form id="register" onSubmit={onSubmit}>
                    <h1>Create an account</h1>

                    <div id="wrapper">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="example@email.com"
                            onChange={onChange}
                            values={values[RegisterFormKeys.Email]}
                        />

                        <label htmlFor="register-pass">Password:</label>
                        <input
                            type="password"
                            id="register-password"
                            name="password"
                            placeholder="**********"
                            onChange={onChange}
                            values={values[RegisterFormKeys.Password]}
                        />

                        <label htmlFor="con-pass">Confirm password:</label>
                        <input
                            type="password"
                            id="confirm-password"
                            name="confirm-password"
                            placeholder="**********"
                            onChange={onChange}
                            values={values[RegisterFormKeys.ConfirmPassword]}
                        />

                        <input type="submit" className="submit-btn" value="Register" />

                        <p>Already have an account? <a href="#">Login</a></p>
                    </div>
                </form>
            </section>
        </main>
    );
}