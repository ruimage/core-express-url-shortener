const React = require('react');

function makeRandomString(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random()
      * charactersLength));
  }
  return result;
}

const getShortenedUrl = (inputURL) => makeRandomString(8);

module.exports = function ShortenUrl({ inputURL }) {
  return (
    <div>
      <h2>Shortened URLs</h2>
      <p>base URL {inputURL}</p>
      <p>base URL {getShortenedUrl(inputURL)}</p>
    </div>
  );
};
