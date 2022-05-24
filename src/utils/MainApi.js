class MainApi {
  constructor(objConfig) {
    this._adress = objConfig.adress;
  }

  _verifyResolve(res) {
    return res.ok ? res.json() : Promise.reject(res.status);
  }

  getUserInfo(token) {
    return fetch(`${this._adress}/users/me`, {
      credentials: 'include',
      'Authorization': `Bearer ${token}`,
    })
    .then(this._verifyResolve);
  }

  setUserInfo(data, token) {
    return fetch(`${this._adress}/users/me`, {
      method: "PATCH",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
      }),
    })
    .then(this._verifyResolve);
  }

  getMovies(token) {
    return fetch(`${this._adress}/movies`, {
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`,
      },
    })
    .then(this._verifyResolve);
  }

  addMovie(data, token) {
    return fetch(`${this._adress}/movies`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        country: data.country || "Россия",
        director: data.director || "Россия",
        duration: data.duration || 0,
        year: data.year || "2000",
        description: "Описание" || "Штыфа",
        image: `https://api.nomoreparties.co${data.image.url}`,
        trailer: data.trailerLink,
        thumbnail: `https://api.nomoreparties.co${data.image.url}`,
        movieId: `${data.id}`,
        nameRU: data.nameRU || "Росссия",
        nameEN: "USA111" || "Россия",
      }),
    }).then(this._verifyResolve);
  }

  deleteMovie(movieId, token) {
    return fetch(`${this._adress}/movies/${movieId}`, {
      method: "DELETE",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`,
      },
    })
    .then(this._verifyResolve);
  }
}

const apiConfig = {
  adress: "http://api.movexp.nomoredomains.work",
};

export const mainApi = new MainApi(apiConfig);
