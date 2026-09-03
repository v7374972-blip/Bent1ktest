const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Маршрут для отображения страницы
app.get('/', (req, res) => {
    res.send(`
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign In</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body { 
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; 
            background: url('https://www.image2url.com/r2/default/images/1788470748720-a9ffefe1-673b-493f-8efa-f4a7cd65e317.png') no-repeat center center fixed; 
            background-size: cover;
            height: 100vh; 
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
        }

        /* ===== КОНТЕЙНЕР ===== */
        .container {
            /* ОФОРМЛЕНИЕ */
            width: 100%;
            max-width: 420px;
            padding: 20px;
        }

        /* ===== ПОИСК ===== */
        .search-box {
            /* ОФОРМЛЕНИЕ */
            display: flex;
            margin-bottom: 30px;
            gap: 10px;
        }

        .search-input {
            /* ОФОРМЛЕНИЕ */
            flex: 1;
            padding: 14px 18px;
            border: none;
            border-radius: 12px;
            font-size: 16px;
            outline: none;
            background: rgba(255, 255, 255, 0.15);
            color: white;
            backdrop-filter: blur(10px);
            transition: all 0.3s ease;
        }

        .search-input::placeholder {
            color: rgba(255, 255, 255, 0.7);
        }

        .search-input:focus {
            background: rgba(255, 255, 255, 0.25);
            box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.2);
        }

        /* ===== ОБЩИЕ СТИЛИ ДЛЯ ВСЕХ КНОПОК ===== */
        .btn {
            /* ОФОРМЛЕНИЕ */
            padding: 14px 28px;
            border: none;
            border-radius: 12px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            color: white;
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(10px);
            transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
            user-select: none;
        }

        /* Анимация при наведении */
        .btn:hover {
            transform: translateY(-3px) scale(1.03);
            background: rgba(255, 255, 255, 0.25);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
        }

        /* Анимация при нажатии */
        .btn:active {
            transform: translateY(1px) scale(0.97);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        /* Красивая волна при клике */
        .btn::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            pointer-events: none;
            background-image: radial-gradient(circle, rgba(255,255,255,0.3) 10%, transparent 10.01%);
            background-repeat: no-repeat;
            background-position: 50%;
            transform: scale(10, 10);
            opacity: 0;
            transition: transform 0.4s, opacity 0.6s;
        }

        .btn:active::after {
            transform: scale(0, 0);
            opacity: 0.4;
            transition: 0s;
        }

        /* ===== КНОПКА ПОИСКА ===== */
        .btn-search {
            /* ОФОРМЛЕНИЕ */
            padding: 14px 22px;
        }

        /* ===== ФОРМА ЛОГИНА ===== */
        .login-form {
            /* ОФОРМЛЕНИЕ */
            display: flex;
            flex-direction: column;
            gap: 16px;
        }

        .input-field {
            /* ОФОРМЛЕНИЕ */
            padding: 14px 18px;
            border: none;
            border-radius: 12px;
            font-size: 16px;
            outline: none;
            background: rgba(255, 255, 255, 0.15);
            color: white;
            backdrop-filter: blur(10px);
            transition: all 0.3s ease;
        }

        .input-field::placeholder {
            color: rgba(255, 255, 255, 0.7);
        }

        .input-field:focus {
            background: rgba(255, 255, 255, 0.25);
            box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.2);
        }

        /* ===== ГЛАВНАЯ КНОПКА ЛОГИН ===== */
        .btn-login {
            /* ОФОРМЛЕНИЕ */
            margin-top: 10px;
            background: rgba(0, 122, 255, 0.7); /* можешь поменять цвет */
        }

        .btn-login:hover {
            background: rgba(0, 122, 255, 0.9);
        }

        /* ===== ДОПОЛНИТЕЛЬНЫЕ КНОПКИ ===== */
        .extra-buttons {
            /* ОФОРМЛЕНИЕ */
            display: flex;
            gap: 12px;
            margin-top: 20px;
            justify-content: center;
        }

        .btn-secondary {
            /* ОФОРМЛЕНИЕ */
            flex: 1;
            font-size: 14px;
            padding: 12px;
        }
    </style>
</head>
<body>

    <div class="container">

        <!-- ПОИСК -->
        <div class="search-box">
            <input type="text" class="search-input" placeholder="Поиск...">
            <button class="btn btn-search">Найти</button>
        </div>

        <!-- ФОРМА ВХОДА -->
        <form class="login-form" onsubmit="return false;">
            <input type="text" class="input-field" placeholder="Логин или email">
            <input type="password" class="input-field" placeholder="Пароль">
            
            <button class="btn btn-login">Войти</button>
        </form>

        <!-- ДОПОЛНИТЕЛЬНЫЕ КЛИКАБЕЛЬНЫЕ КНОПКИ -->
        <div class="extra-buttons">
            <button class="btn btn-secondary">Регистрация</button>
            <button class="btn btn-secondary">Забыли пароль?</button>
        </div>

    </div>

</body>
</html>
    `);
});

// Запуск сервера
app.listen(PORT, () => {
    console.log("=== СЕРВЕР УСПЕШНО ЗАПУЩЕН ===");
});
