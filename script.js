let secretNumber;
let attempts;

function startGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('feedback').textContent = '';
    document.getElementById('feedback').className = '';
    document.getElementById('guessInput').value = '';
    document.getElementById('restartButton').style.display = 'none';
    document.getElementById('attempts').textContent = 'Tentativas: 0';
}

function checkGuess() {
    const guessInput = document.getElementById('guessInput');
    const feedback = document.getElementById('feedback');
    const attemptsDisplay = document.getElementById('attempts');
    const guess = Number(guessInput.value);

    feedback.className = '';

    if (!guess || guess < 1 || guess > 100) {
        feedback.textContent = 'Digite um número entre 1 e 100!';
        return;
    }

    attempts++;
    attemptsDisplay.textContent = `Tentativas: ${attempts}`;

    if (guess === secretNumber) {
        feedback.textContent = `🎉 Acertou! Número: ${secretNumber} em ${attempts} tentativas!`;
        feedback.classList.add('acertou');
        document.getElementById('restartButton').style.display = 'inline-block';
    } else if (guess < secretNumber) {
        feedback.textContent = '⬆ Muito baixo!';
        feedback.classList.add('muito-baixo');
    } else {
        feedback.textContent = '⬇ Muito alto!';
        feedback.classList.add('muito-alto');
    }

    guessInput.value = '';
    guessInput.focus();
}

function restartGame() {
    startGame();
}

window.onload = startGame;

