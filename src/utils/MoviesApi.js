const BASE_URL = 'https://api.nomoreparties.co/beatfilm-movies';

function getResponseData (res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
};

export const getMovies = () => {
    return fetch (`${BASE_URL}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
    })
        .then(getResponseData);
}