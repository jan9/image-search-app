import axios from 'axios';

class Imgur {
  constructor(key) {
    this.imgur = axios.create({
      baseURL: 'https://api.imgur.com/3/gallery/search/time/all',
      headers: { Authorization: `Client-ID ${key}` },
    });
  }

  queryStringGenerator = (originalQuery) => {
    let queryType = '';
    let queryStr = originalQuery.split(' ');
    if (queryStr.length < 2) {
      queryType = 'q_exactly';
    } else if (queryStr.includes('and')) {
      queryType = 'q_all';
    } else {
      queryType = 'q_any';
    }
    queryStr = queryStr
      .filter((item) => item !== 'and' && item !== 'or')
      .join(',');

    return { queryStr, queryType };
  };

  async search(query) {
    // make query input into an array and form query strings
    const newQuery = this.queryStringGenerator(query);

    // api call to imgur
    const response = await this.imgur.get(
      `/?${newQuery.queryType}=${newQuery.queryStr}`
    );
    return response.data.data;
  }
}

export default Imgur;
