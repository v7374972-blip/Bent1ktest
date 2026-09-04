const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

function getLoginPage(showError = false) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>

    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
                         Roboto, sans-serif;
            background: #111318;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            padding: 20px;
        }

        .auth-container {
            background-color: #23252b;
            padding: 39px 15px 70px;
            border-radius: 6px;
            width: 100%;
            max-width: 400px;
        }

        h1 {
            color: #fff;
            text-align: center;
            margin-bottom: 18px;
            font-size: 26px;
        }

        .error-message {
            color: #ff4d4d;
            font-size: 13.5px;
            margin: 6px 0 10px;
            display: ${showError ? 'block' : 'none'};
        }

        .input-control {
            width: 100%;
            padding: 12px 15px;
            margin-bottom: 9px;
            background-color: #2d3038;
            border: 1px solid #3a3e47;
            border-radius: 6px;
            color: #fff;
            font-size: 14.5px;
        }

        .input-control::placeholder {
            color: #9a9ea6;
        }

        .input-control:focus {
            outline: none;
            border-color: #fff;
        }

        .btn-submit {
            width: 100%;
            padding: 12px;
            background: transparent;
            border: 1.5px solid #fff;
            border-radius: 6px;
            color: #fff;
            font-size: 15.5px;
            font-weight: 600;
            cursor: pointer;
        }

        .btn-submit:hover {
            background-color: rgba(255, 255, 255, 0.08);
        }
    </style>
</head>

<body>
    <div class="auth-container">

        <h1>Login</h1>

        <form action="/login" method="POST">

            <input
                type="text"
                name="username"
                class="input-control"
                placeholder="Username/Email/Phone"
                autocomplete="username"
                required
            >

            <input
                type="password"
                name="password"
                class="input-control"
                placeholder="Password"
                autocomplete="current-password"
                required
            >

            <div class="error-message">
                Incorrect username or password.
            </div>

            <button type="submit" class="btn-submit">
                Log In
            </button>

        </form>

    </div>
</body>
</html>
    `;
}

app.get('/', (req, res) => {
    res.send(getLoginPage(false));
});

app.post('/login', (req, res) => {
    const login = req.body.username || '';
    const password = req.body.password || '';

    // Проверяем наличие русских букв.
    const hasRussian =
        /[А-Яа-яЁё]/.test(login) ||
        /[А-Яа-яЁё]/.test(password);

    if (hasRussian) {
        return res.send(getLoginPage(true));
    }

    // Тестовый вариант:
    // не сохраняем и не выводим пароль.
    return res.send(getLoginPage(true));
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
