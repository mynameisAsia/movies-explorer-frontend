import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

function Profile () {
    return (
        <>
        <Navigation />
        <section className="profile">
            <div className="profile__wrapper">
                <h1 className="profile__title">Привет, Виталий!</h1>
                <div className="profile__box">
                    <h3 className="profile__paragraph profile__paragraph_type_name">Имя</h3>
                    <p className="profile__paragraph profile__paragraph_type_name">Виталий</p>
                </div>
                <div className="profile__box">
                    <h3 className="profile__paragraph profile__paragraph_type_email">E-mail</h3>
                    <p className="profile__paragraph profile__paragraph_type_email">pochta@yandex.ru</p>
                </div>
                <a href="/" className="profile__edit">Редактировать</a>
                <Link to="/sign-in" className="profile__logout">Выйти из аккаунта</Link>
            </div>
        </section>
        </>
    )
}

export default Profile;