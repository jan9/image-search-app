const myHeaders = new Headers();
myHeaders.append(
  'Authorization',
  `Client-ID ${process.env.REACT_APP_CLIENT_ID}`
);

const requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
};

export const result = fetch(
  'https://api.imgur.com/3/gallery/search/?q=cat',
  requestOptions
)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log('error', error));
