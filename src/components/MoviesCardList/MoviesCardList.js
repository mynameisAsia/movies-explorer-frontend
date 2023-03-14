import React, { useState, useEffect } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList ({ cards, searchError, onCardLike, onCardDelete, savedMovies }) {
    
    const [shownMovies, setShownMovies] = useState(0);

    function getSavedMovieCard(savedMovies, card) {
        return savedMovies.find((m) => m.movieId === card.id);
    };

    function setCards() {

        const display = window.innerWidth;
            if (display > 1023) {
                setShownMovies(12);
            } else if (display > 800) {
                setShownMovies(8);
            } else if (display < 800) {
                setShownMovies(5);
            }
    };

    useEffect(() => {
        setCards();
    }, []);

    useEffect(() => {
        setTimeout(() => {
        window.addEventListener('resize', setCards);
        }, 1000);
    });

    function showMore() {

        const display = window.innerWidth;

        if (display > 1180) {
            setShownMovies(shownMovies + 4);
        } else if (display > 1023) {
            setShownMovies(shownMovies + 3);
        } else if (display < 1023) {
            setShownMovies(shownMovies + 2);
        }
    };

    return (
        <section className="movies">
            <div className="content-wrapper">
                <ul className="movies__list">
                    {cards.length > 0? (cards.slice(0, shownMovies).map((card) => (
                        <MoviesCard
                            key={card._id} 
                            card={card}
                            onCardLike={onCardLike}
                            onCardDelete={onCardDelete}
                            saved={getSavedMovieCard(savedMovies, card)}
                            savedMovies={savedMovies}
                        />
                    ))) : (<h3 className="movies__error">{searchError}</h3>)}
                </ul>
                {cards.length > shownMovies ? (
                    <button className="button button_theme_movies" type="submit" onClick={showMore}>Еще</button>
                ) : ""}
            </div> 
        </section>
    )
}

export default MoviesCardList;