import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import * as api from '../../utils/MoviesApi';


function SavedMovies ({ loggedIn, savedMovies, onCardDelete, isBurgerClicked, openMobileMenu }) {

    const [searchValue, setSearchValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [searchError, setSearchError] = useState('');
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false)

    function filterDuration(movies) {
        return movies.filter((movie) => movie.duration <= 40);
    };

    useEffect(() => {
        const moviesList = filterMovies(savedMovies, searchValue);
        setFilteredMovies(isCheckboxChecked ? filterDuration(moviesList) : moviesList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [savedMovies, isCheckboxChecked, searchValue]);

    function filterMovies(movies) {
        return movies.filter((movie) =>
            (isCheckboxChecked ? movie.duration <= 40 : movie.duration > 0) &&
            (movie.nameRU.toLowerCase().includes(searchValue.toLowerCase()) || movie.nameEN.toLowerCase().includes(searchValue.toLowerCase()))
        )
    };

    function handleSearchMovies(searchValue) {

        if (!searchValue) {
            setSearchError('Нужно ввести ключевое слово');
            return;
        }

        if (savedMovies.length > 0) {
            setLoading(true);
            setFilteredMovies([]);
            const filteredMovies = filterMovies(savedMovies);
            filteredMovies.length === 0 ? setSearchError('Ничего не найдено') : setFilteredMovies(filteredMovies);
            setLoading(false);
            return;
        }

        setLoading(true);
        api.getMovies()
            .then((res) => {
                const filteredMovies = filterMovies(res);
                setFilteredMovies(filteredMovies);
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    }

    return (
        <section className="saved-movies">
            <Header loggedIn={loggedIn} isBurgerClicked={isBurgerClicked} openMobileMenu={openMobileMenu} />
            <SearchForm 
                searchValue={searchValue}
                setSearchValue={setSearchValue} 
                onSearchMovies={handleSearchMovies}
                isCheckboxChecked={isCheckboxChecked}
                setIsCheckboxChecked={setIsCheckboxChecked}
            />
            {!loading ? (<MoviesCardList 
                cards={filteredMovies}
                savedMovies={savedMovies}
                searchError={searchError}
                onCardDelete={onCardDelete}
            />) : (<Preloader />)}
            <Footer />
        </section>
    )
}

export default SavedMovies;