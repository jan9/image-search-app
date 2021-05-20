//
class Imgur {
  constructor(key) {
    this.key = key;
    this.myHeaders = new Headers();
    this.myHeaders.append('Authorization', `Client-ID ${this.key}`);

    this.requestOptions = {
      method: 'GET',
      headers: this.myHeaders,
      redirect: 'follow',
    };
  }

  async search(query) {
    return fetch(
      `https://api.imgur.com/3/gallery/search/?q=${query}`,
      this.requestOptions
    )
      .then((response) => response.json())
      .then((result) => result.data);
    // .catch((error) => console.log('error', error));
  }

  async mostPopular() {
    return fetch(
      `https://api.imgur.com/3/gallery/search/viral/`,
      this.requestOptions
    )
      .then((response) => response.json())
      .then((result) => result.data);
    // .catch((error) => console.log('error', error));
  }
}

export default Imgur;
