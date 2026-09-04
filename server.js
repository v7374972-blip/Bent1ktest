<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Главная — Название Игры</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div class="main-container">
        <h1 class="game-title">НАЗВАНИЕ ИГРЫ</h1>
        <p class="game-subtitle">Добро пожаловать в захватывающий мир!</p>
        
        <button id="playBtn" class="btn-play">ИГРАТЬ</button>
    </div>

    <script>
        // При клике перенаправляем на файл логина
        document.getElementById('playBtn').addEventListener('click', function() {
            // Укажи здесь точное название файла со страницей логина
            window.location.href = 'login.html'; 
        });
    </script>

</body>
</html>
