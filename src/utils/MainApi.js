export const BASE_URL = 'https://api.movies.amam.nomoredomainsclub.ru';

function getResponseData (res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
};

export const register = (name, email, password) => {
    return fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name, email, password})
    })
          .then(getResponseData);
};

export const login = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password})
    })
          .then(getResponseData);
};

export const tokenCheck = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
    })
          .then(getResponseData);
};

export const getUserInfo = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json',
    },
  })
          .then(getResponseData);
};

export const getSavedMovies = () => {
    return fetch(`${BASE_URL}/movies`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json'
      }
    })
          .then(getResponseData);
};

export const updateUserInfo = (data) => {
    return fetch (`${BASE_URL}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        name: data.name, 
        email: data.email, 
      }),
    })
          .then(getResponseData);
};

export const saveMovie = (movie) => {
    return fetch (`${BASE_URL}/movies`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(movie),
  })
          .then(getResponseData);
};

export const deleteMovie = (id) => {
    return fetch(`${BASE_URL}/movies/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json',
      }
    })
          .then(getResponseData);
};