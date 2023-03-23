import React from "react";
import { useLocation } from "react-router-dom";
import { transformDuration } from "../../utils/transformDuration";

function MoviesCard ({ card, onCardLike, onCardDelete, saved, savedMovies }) {

    const { pathname } = useLocation();
    const cardSaveButtonClassName = `${saved ? 'button button_saved' : 'button button_theme_save'}`;

    function onCardClick() {
        if (saved) {
            onCardDelete(savedMovies.filter((m) => m.movieId === card.id)[0]);
        } else {
            onCardLike(card);
        }
    };
    
    function onDelete() {
        onCardDelete(card);
    };

    return (
        <>
        <li className="movies-card">
            <a className="movies-card" href={card.trailerLink} rel="noreferrer" target="_blank">
                <img className="movies-card__pic" src={card.image.url ? `https://api.nomoreparties.co/${card.image.url}` : card.image} alt={card.nameRU} />
                <div className="movies-card__title">
                    <h3 className="movies-card__name">{card.nameRU}</h3>
                    <p className="movies-card__time">{transformDuration(card.duration)}</p>
                </div>
            </a>
            {pathname === '/movies' && (<button type="button" className={cardSaveButtonClassName} onClick={onCardClick}></button>)}
            {pathname === '/saved-movies' && (<button type="button" className='button button_theme_delete' onClick={onDelete}></button>)}
        </li>
    </>
    )
}

export default MoviesCard;