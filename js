document.addEventListener('DOMContentLoaded', () => {
    const mysteryButton = document.getElementById('mysteryButton');
    const outputText = document.getElementById('outputText');
    const magicBox = document.getElementById('magicBox');

    mysteryButton.addEventListener('click', () => {
        outputText.textContent = 'Ого, ты нажал на кнопку! Что же будет дальше?';
        mysteryButton.textContent = 'Не нажимай больше!';
        mysteryButton.style.backgroundColor = '#00C851'; // Зелёный цвет
        magicBox.style.transform = 'rotate(360deg)';
        magicBox.style.background = '#a1c4fd'; // Меняем цвет блока
    });

    // При наведении на кнопку
    mysteryButton.addEventListener('mouseover', () => {
        mysteryButton.style.transform = 'translateX(20px)';
    });

    mysteryButton.addEventListener('mouseout', () => {
        mysteryButton.style.transform = 'translateX(0)';
    });

    // При двойном клике на странице
    document.body.addEventListener('dblclick', () => {
        outputText.textContent = 'Ты дважды кликнул! Теперь всё перевернулось!';
        document.body.style.background = 'black';
        document.body.style.color = 'white';
    });

    // При наведении на магический блок
    magicBox.addEventListener('mouseover', () => {
        magicBox.style.transform = 'scale(1.5)';
        magicBox.style.background = '#ffcc00'; // Жёлтый цвет
    });

    magicBox.addEventListener('mouseout', () => {
        magicBox.style.transform = 'scale(1)';
        magicBox.style.background = '#ff6f61'; // Возвращаем исходный цвет
    });

    // Случайное движение кнопки при попытке навести
    mysteryButton.addEventListener('mousemove', (e) => {
        const x = Math.random() * (window.innerWidth - mysteryButton.offsetWidth);
        const y = Math.random() * (window.innerHeight - mysteryButton.offsetHeight);
        mysteryButton.style.position = 'absolute';
        mysteryButton.style.left = `${x}px`;
        mysteryButton.style.top = `${y}px`;
    });
});
