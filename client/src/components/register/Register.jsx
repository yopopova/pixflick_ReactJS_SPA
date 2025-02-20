import { useContext } from "react";
import { Link } from "react-router-dom";

import registerStyles from './Register.module.css';

import AuthContext from "../../contexts/authContext";
import useForm from "../../hooks/useForm";
import Path from '../../paths';

const RegisterFormKeys = {
    Username: 'username',
    Avatar: 'avatar',
    Email: 'email',
    Password: 'password',
    ConfirmPassword: 'confirm-password',
}

export default function Register() {
    const { registerSubmitHandler } = useContext(AuthContext);

    const {values, onChange, onSubmit} = useForm(registerSubmitHandler, {
        [RegisterFormKeys.Username]: '',
        [RegisterFormKeys.Avatar]: '',
        [RegisterFormKeys.Email]: '',
        [RegisterFormKeys.Password]: '',
        [RegisterFormKeys.ConfirmPassword]: '',
    });

    return (
        <main>
            <section className={registerStyles.register}>
                <form className={registerStyles.form} onSubmit={onSubmit}>
                    <h1>Create an account</h1>

                    <div className={registerStyles.wrapper}>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Your username"
                            onChange={onChange}
                            values={values[RegisterFormKeys.Username]}
                        />

                        <label htmlFor="avatar">Avatar:</label>
                        <input
                            type="text"
                            id="avatar"
                            name="avatar"
                            placeholder="Your avatar"
                            onChange={onChange}
                            values={values[RegisterFormKeys.Avatar]}
                        />

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

                        <input type="submit" className={registerStyles.submit} value="Register" />

                        <p>Already have an account? <Link to={Path.Login}>Login</Link></p>
                    </div>
                </form>
            </section>
        </main>
    );
}