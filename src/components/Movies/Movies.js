import React from "react";
import { useState, useEffect } from "react";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from '../Footer/Footer';
import Preloader from "../Preloader/Preloader";
import * as api from '../../utils/MoviesApi';

function Movies ({ onCardLike, onCardDelete, savedMovies }) {

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

    function filterMovies(movies) {
        return movies.filter((movie) =>
            (isCheckboxChecked ? movie.duration <= 40 : movie.duration > 0) &&
            (movie.nameRU.toLowerCase().includes(searchValue.toLowerCase()) || movie.nameEN.toLowerCase().includes(searchValue.toLowerCase()))
        )
    };

    function handleSearchMovies() {

        if (!searchValue) {
            return;
        }
        
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
        <section className="movies">
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
                onCardLike={onCardLike}
                onCardDelete={onCardDelete}
            />) : (<Preloader />)}
            <Footer />
        </section>
    )
}

export default Movies;