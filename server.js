const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Маршрут для отображения страницы с чистым фоном
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
            
            background: url('https://www.image2url.com/r2/default/images/1788470748720-a9ffefe1-673b-493f-8efa-f4a7cd65e317.png') no-repeat center center fixed; 
            background-size: cover;
            
            height: 100vh; 
            margin: 0; 
        }
    </style>
</head>
<body>
    <!-- Все элементы оформления, поля авторизации и меню полностью удалены -->
</body>
</html>
    `);
});

// Запуск прослушивания порта
app.listen(PORT, () => {
    console.log("=== СЕРВЕР УСПЕШНО ЗАПУЩЕН ===");
});
