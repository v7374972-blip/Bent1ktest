const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

function getLoginPage(errorMessage = '') {
    return `
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Вход в систему</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }

        body { 
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; 
            background-color: #1b1d22;
            display: flex; 
            justify-content: center; 
            align-items: center; 
            min-height: 100vh; 
            padding: 20px;
        }

        .auth-container { 
            background-color: #23252b;
            padding: 30px 20px; 
            border-radius: 6px; 
            width: 100%;
            max-width: 400px;
        }

        h1 {
            color: #ffffff; 
            text-align: center; 
            margin-bottom: 20px; 
            font-size: 24px; 
        }

        .input-control { 
            width: 100%; 
            padding: 12px 15px; 
            background-color: #2d3038;
            border: 1px solid #3a3e47; 
            border-radius: 6px; 
            color: #ffffff; 
            font-size: 14.5px; 
        }

        /* Небольшой отступ у логина */
        .input-username {
            margin-bottom: 8px;
        }

        /* Пароль расположен впритык к кнопке или блоку ошибки */
        .input-password {
            margin-bottom: 4px;
        }

        .error-message {
            color: #ff4d4d;
            font-size: 13.5px;
            margin: 4px 0 8px 0;
            text-align: left;
            display: ${errorMessage ? 'block' : 'none'};
        }

        .btn-submit { 
            width: 100%; 
            padding: 12px; 
            background-color: transparent; 
            border: 1.5px solid #ffffff; 
            border-radius: 6px; 
            color: #ffffff; 
            font-size: 15.5px; 
            font-weight: 600; 
            cursor: pointer; 
            margin-top: 4px;
        }
        
        .btn-submit:hover { background-color: rgba(255, 255, 255, 0.08); }
    </style>
</head>
<body>
    <div class="auth-container">
        <h1>Вход</h1>
        
        <form action="/login" method="POST">
            <input type="text" name="username" class="input-control input-username" placeholder="Имя пользователя" required>
            <input type="password" name="password" class="input-control input-password" placeholder="Пароль" required>
            
            <!-- Ошибка выводится прямо под полем пароля -->
            <div class="error-message">${errorMessage}</div>
            
            <button type="submit" class="btn-submit">Войти</button>
        </form>
    </div>
</body>
</html>
    `;
}

app.get('/', (req, res) => {
    res.send(getLoginPage());
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Регулярное выражение для проверки отсутствие кириллицы (разрешена только латиница и цифры)
    const hasCyrillic = /[а-яА-ЯёЁ]/.test(username) || /[а-яА-ЯёЁ]/.test(password);

    if (hasCyrillic) {
        // Если найдена кириллица, возвращаем форму с сообщением об ошибке под паролем
        return res.send(getLoginPage('Incorrect username or password.'));
    }

    // Логика аутентификации...
    res.send(getLoginPage('Incorrect username or password.'));
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});
