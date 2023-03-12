import React from "react";
import logo from '../../images/logo.svg';
import { Link } from "react-router-dom";

function Login ({ onLogin }) {

    const [data, setData] = React.useState({
        email: "",
        password: "",
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setData((data) => ({ ...data, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!data.password || !data.email) {
            return;
        }

        onLogin(data);
    }

    return (
        <section className="auth-form">
            <div className="auth-form__wrapper">
                <Link to='/' >
                    <img src={logo} alt='logo' className="logo" />
                </Link>
                <h1 className="auth-form__title">Рады видеть!</h1>
                <form className="auth-form__form" onSubmit={handleSubmit}>
                    <label className="auth-form__label">Email</label>
                    <input 
                        className="auth-form__input" 
                        type="email"
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                        required
                    ></input>
                    <label className="auth-form__label">Пароль</label>
                    <input 
                        className="auth-form__input" 
                        type="password"
                        name="password"
                        value={data.password}
                        onChange={handleChange}
                        required
                    ></input>
                    <button className="button button_theme_auth" type="submit">Войти</button>
                    <Link to='/signup' className='auth-form__link'><span className='auth-form__link_grey'>Еще не зарегистрированы? </span>Регистрация</Link>
                </form>
            </div>
        </section>
    )
}

export default Login;