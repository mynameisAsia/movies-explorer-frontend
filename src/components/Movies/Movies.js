import React from "react";
import { useState, useEffect } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from '../Footer/Footer';
import Preloader from "../Preloader/Preloader";
import * as api from '../../utils/MoviesApi';
import Header from "../Header/Header";

function Movies ({ loggedIn, onCardLike, onCardDelete, savedMovies, isBurgerClicked, openMobileMenu }) {

    const [searchValue, setSearchValue] = useState(localStorage.getItem('searchValue') || '');
    const [loading, setLoading] = useState(false);
    const [allMovies, setAllMovies] = useState(JSON.parse(localStorage.getItem('allMovies')) || []);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [searchError, setSearchError] = useState('');
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(JSON.parse(localStorage.getItem('isCheckboxChecked')) || false)

    useEffect(() => {
        localStorage.setItem('searchValue', searchValue);
    }, [searchValue]);

    useEffect(() => {
        localStorage.setItem('allMovies', JSON.stringify(allMovies));
    }, [allMovies]);

    useEffect(() => {
        localStorage.setItem('filteredMovies', JSON.stringify(filteredMovies));
    }, [filteredMovies]);

    useEffect(() => {
        localStorage.setItem('isCheckboxChecked', isCheckboxChecked);
    }, [isCheckboxChecked]);

    function filterDuration(movies) {
        return movies.filter((movie) => movie.duration <= 40);
    };

    useEffect(() => {
        const moviesList = filterMovies(allMovies, searchValue);
        setFilteredMovies(isCheckboxChecked ? filterDuration(moviesList) : moviesList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [allMovies, isCheckboxChecked, searchValue]);

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

        if (allMovies.length > 0) {
            setLoading(true);
            setAllMovies([]);
            const filteredMovies = filterMovies(allMovies);
            filteredMovies.length === 0 ? setSearchError('Ничего не найдено') : setFilteredMovies(filteredMovies);
            setLoading(false);
            return;
        }
        
        setLoading(true);
        api.getMovies()
            .then((res) => {
                setAllMovies(res);
                const filteredMovies = filterMovies(res);
                setFilteredMovies(filteredMovies);
            })
            .catch((err) => {
                console.log(err)
                setSearchError(err.message || 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')})
            .finally(() => setLoading(false));
    }

    return (
        <section className="movies">
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
                onCardLike={onCardLike}
                onCardDelete={onCardDelete}
            />) : (<Preloader />)}
            <Footer />
        </section>
    )
}

export default Movies;