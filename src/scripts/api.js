class Api {
  constructor(options) {
    this.url = options.url;
    this.headers = options.headers;
  }

  getUserInfo() {
    return fetch(`${this.url}/users/me`, {
      headers: this.headers
    })
      .then(this.checkStatus)
      .catch(this.showError);
  }

  getCardList() {
    return fetch(`${this.url}/cards`, {
      headers: this.headers
    })
      .then(this.checkStatus)
      .catch(this.showError);
  }


  editUserProfile(user) {
    return fetch(`${this.url}/users/me`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        name: user.name,
        about: user.about,
      })
    })
      .then(this.checkStatus)
      .catch(this.showError);
  }

  checkStatus(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}, ${res.statusText}`);
  }

  showError(err) {
    console.log(err);
    return Promise.reject(err);
  }
}

export {Api};