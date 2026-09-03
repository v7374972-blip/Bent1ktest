app.get('/', (req, res) => {
    res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Sign In</title>
    <style>
        /* Базовые настройки страницы */
        body { 
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; 
            background-color: #191b1f; 
            display: flex; 
            justify-content: center; 
            align-items: center; 
            height: 100vh; 
            margin: 0; 
        }

        /* Контейнер формы */
        .auth-container { 
            background-color: #2b2d32; 
            padding: 30px; 
            border-radius: 8px; 
            width: 100%;
            max-width: 380px; 
            box-shadow: 0 4px 15px rgba(0,0,0,0.3);
            box-sizing: border-box;
        }

        /* Стили полей ввода */
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
        .input-control::placeholder {
            color: #a0a5ab;
        }
        .input-control:focus {
            outline: none;
            border-color: #ffffff;
        }

        /* Главная кнопка отправки */
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
        .btn-submit:hover {
            background-color: rgba(255, 255, 255, 0.1);
        }

        /* Дополнительные интерактивные элементы */
        .secondary-actions {
            border-top: 1px solid #3f434a;
            padding-top: 20px;
            margin-top: 20px;
        }
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
        }
        .btn-secondary:hover {
            background-color: #43474d;
        }

        /* Текстовые ссылки */
        .link-text {
            display: block;
            text-align: center;
            color: #ffffff;
            font-size: 14px;
            text-decoration: none;
            margin: 15px 0;
        }
        .link-text:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>

<div class="auth-container">
    <form action="/login" method="POST">
        <input type="text" name="username" class="input-control" placeholder="Username/Email/Phone" required>
        <input type="password" name="password" class="input-control" placeholder="Password" required>
        <button type="submit" class="btn-submit">Log In</button>
    </form>

    <a href="#" class="link-text">Forgot Password or Username?</a>

    <div class="secondary-actions">
        <button class="btn-secondary">Alternative Option 1</button>
        <button class="btn-secondary">Alternative Option 2</button>
    </div>

    <a href="#" class="link-text" style="margin-top: 20px;">Don't have an account? Sign Up</a>
</div>

</body>
</html>
    `);
});
