const express = require('express');
const path = require('path');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));

// 1. При открытии сайта показываем главную (index.html)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// 2. Нажатие кнопки "ИГРАТЬ" открывает твою страницу логина
app.get('/login.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});

// 3. После успешного входа отправляем на игру (укажи нужный файл вместо game.html)
app.post('/login', (req, res) => {
    res.redirect('/game.html'); 
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));
