require('@babel/register');

const express = require('express');
const logger = require('morgan');
const ReactDOMServer = require('react-dom/server');
const React = require('react');
const Main = require('./views/Main');

const app = express();
const PORT = 3000;

// Тут должна быть проверка подключения к БД.

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  // Отображает список коротких URL
  const main = React.createElement(Main, { title: 'Url shortener' });
  const html = ReactDOMServer.renderToStaticMarkup(main);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

app.post('/urls', (req, res) => {
  // Создать новый объект 'Url'
  // Автоматически создаются короткие  URL
  // В конце надо вернуться обратно на домашнюю страницу
});

app.get('/:shortUrl', (req, res, next) => {
  // Перейти по короткому к соответствующему "длинному" URL
});

app.listen(PORT, () => {
  console.log(`server started PORT: ${PORT}`);
});
