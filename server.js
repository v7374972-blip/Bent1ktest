const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Маршрут для отображения страницы с чистым фоном без элементов авторизации
app.get('/', (req, res) => {
    res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Background View</title>
    <style>
        body { 
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; 
            
            background: url('https://www.image2url.com/r2/default/images/1788469813675-0bc88860-e73d-4dff-bb4c-a081a7d2f891.png') no-repeat center center fixed; 
            background-size: cover;
            
            height: 100vh; 
            margin: 0; 
        }
    </style>
</head>
<body>
    <!-- Центральное меню авторизации, поля ввода и кнопки полностью удалены -->
</body>
</html>
    `);
});

// Запуск прослушивания порта
app.listen(PORT, () => {
    console.log("=== СЕРВЕР УСПЕШНО ЗАПУЩЕН ===");
});
