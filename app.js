const express = require('express');
const logger = require('morgan');

const app = express();
const PORT = 3000;

// Тут должна быть проверка подключения к БД.

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  // Отображает список коротких URL
  res.render('Main', { title: 'Url shortener' });
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
