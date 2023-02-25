import React from "react";
import { Link } from "react-router-dom";

function Error () {
    return (
        <section className="error">
            <div className="content-wrapper">
                <h1 className="error__title">404</h1>
                <p className="error__subtitle">Страница не найдена</p>
                <div className="error__wrapper">
                    <Link className="error__back" to="/">
                        Назад
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Error;