const express = require('express');
const logger = require('morgan');

const app = express();
const PORT = 3000;

// Тут должно быть проверка подключения к БД.

app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.get('/', function (req, res) {
  // Отображает список коротких URL
  res.render('index', { title: 'Url shortener' });
});

app.post('/urls', function (req, res) {
  // Создать новый объект 'Url'
  // Автоматически создаются короткие  URL
  // В конце надо вернуться обратно на домашнюю страницу
});

app.get('/:shortUrl', function (req, res, next) {
  // Перейти по короткому к соответствующему "длинному" URL
});

app.listen(PORT, () => {
  console.log(`server started PORT: ${PORT}`);
})
