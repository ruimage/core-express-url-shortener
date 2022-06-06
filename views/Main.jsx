const React = require('react');
const Layout = require('./Layout');

module.exports = function Main({ title }) {
  return (
    <Layout title={title}>
      <div className="container">
        <h1>{title}</h1>
        <p>
          <form action="/urls" method="POST">
            <input name="inputURL" />
            <button type="submit">Сократить ссылку</button>
          </form>
        </p>
      </div>

    </Layout>
  );
};
