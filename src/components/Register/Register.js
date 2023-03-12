import React from "react";
import logo from '../../images/logo.svg';
import { Link } from "react-router-dom";

function Register ({ onRegister }) {

    const [data, setData] = React.useState({
        name: "",
        email: "",
        password: "",
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setData((data) => ({ ...data, [name]: value }));
    }
    
    function handleSubmit (e) {
        e.preventDefault();
        onRegister(data);
    }

    return (

        <section className="auth-form">
            <div className="auth-form__wrapper">
                <Link to='/' >
                    <img src={logo} alt='logo' className="logo" />
                </Link>
                <h1 className="auth-form__title">Добро пожаловать!</h1>
                <form className="auth-form__form" onSubmit={handleSubmit}>
                    <label className="auth-form__label">Имя</label>
                    <input 
                        className="auth-form__input" 
                        type="name"
                        name="name"
                        minLength="2"
                        maxLength="40"
                        value={data.name}
                        onChange={handleChange}
                        required
                    ></input>
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
                    <button className="button button_theme_register" type="submit">Зарегистрироваться</button>
                    <Link to='/signin' className='auth-form__link'><span className='auth-form__link_grey'>Уже зарегистрированы? </span>Войти</Link>
                </form>
            </div>
        </section>
    )
}

export default Register;