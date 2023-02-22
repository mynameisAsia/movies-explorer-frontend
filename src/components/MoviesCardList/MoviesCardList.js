import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList () {
    return (
        <section className="movies">
            <div className="content-wrapper">
                <ul className="movies__list">
                    <MoviesCard />
                </ul>
                <button className="button button_theme_movies" type="submit">Еще</button>
            </div>
        </section>
    )
}

export default MoviesCardList;