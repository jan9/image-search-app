import axios from 'axios';

class Imgur {
  constructor(key) {
    this.imgur = axios.create({
      baseURL: 'https://api.imgur.com/3/gallery/search/time/all',
      headers: { Authorization: `Client-ID ${key}` },
    });
  }

  async search(query) {
    // make query input into an array and form query strings
    let queryType = '';
    let joinedQuery = query.split(' ');
    if (joinedQuery.length < 2) {
      queryType = 'q_exactly';
    } else if (joinedQuery.includes('and')) {
      queryType = 'q_all';
    } else {
      queryType = 'q_any';
    }
    joinedQuery = joinedQuery
      .filter((item) => item !== 'and' && item !== 'or')
      .join(',');

    // api call to imgur
    const response = await this.imgur.get(`/?${queryType}=${joinedQuery}`);
    return response.data.data;
  }
}

export default Imgur;
