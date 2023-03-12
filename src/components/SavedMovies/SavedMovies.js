import React, { useState, useEffect } from "react";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import * as api from '../../utils/MoviesApi';


function SavedMovies ({ savedMovies, onCardDelete }) {

    const [searchValue, setSearchValue] = useState(localStorage.getItem('searchValue') || '');
    const [loading, setLoading] = useState(false);
    const [allMovies, setAllMovies] = useState(JSON.parse(localStorage.getItem('allMovies')) || []);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(JSON.parse(localStorage.getItem('isCheckboxChecked')) || false)

    useEffect(() => {
        localStorage.setItem('searchValue', searchValue);
    }, [searchValue]);

    useEffect(() => {
        localStorage.setItem('allMovies', JSON.stringify(allMovies));
    }, [allMovies]);

    useEffect(() => {
        localStorage.setItem('isCheckboxChecked', isCheckboxChecked);
    }, [isCheckboxChecked]);

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
            return;
        }

        console.log(searchValue);
        setLoading(true);
        api.getMovies()
            .then((res) => {
                setAllMovies(res);
                const filteredMovies = filterMovies(res);
                setFilteredMovies(filteredMovies);
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    }

    return (
        <section className="saved-movies">
            <Navigation />
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
                onCardDelete={onCardDelete}
            />) : (<Preloader />)}
            <Footer />
        </section>
    )
}

export default SavedMovies;