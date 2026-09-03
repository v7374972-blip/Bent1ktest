const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Sign In</title>
    <style>
        body { 
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; 
            background: url('https://www.image2url.com/r2/default/images/1788470748720-a9ffefe1-673b-493f-8efa-f4a7cd65e317.png') no-repeat center center fixed; 
            background-size: cover;
            height: 100vh; 
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .box {
            /* ОФОРМЛЕНИЕ */
            width: 320px;
            padding: 30px;
            background: rgba(0, 0, 0, 0.5);
            border-radius: 12px;
        }

        input {
            /* ОФОРМЛЕНИЕ */
            width: 100%;
            padding: 12px;
            margin-bottom: 12px;
            border: 1px solid #ccc;
            border-radius: 6px;
            font-size: 15px;
            box-sizing: border-box;
        }

        button {
            /* ОФОРМЛЕНИЕ */
            width: 100%;
            padding: 12px;
            border: none;
            border-radius: 6px;
            background: #007aff;
            color: white;
            font-size: 15px;
            cursor: pointer;
        }

        button:active {
            opacity: 0.8;
        }
    </style>
</head>
<body>
    <div class="box">
        <form onsubmit="return false;">
            <input type="text" placeholder="Логин" autocomplete="off">
            <input type="password" placeholder="Пароль" autocomplete="off">
            <button type="submit">Войти</button>
        </form>
    </div>
</body>
</html>
    `);
});

app.listen(PORT, () => {
    console.log("=== СЕРВЕР УСПЕШНО ЗАПУЩЕН ===");
});
