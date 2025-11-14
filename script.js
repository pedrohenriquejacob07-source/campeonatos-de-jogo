let randomNumber = Math.floor(Math.random() * 100) + 1;

const guessInput = document.getElementById('guess');
const checkBtn = document.getElementById('checkBtn');
const message = document.getElementById('message');
const restartBtn = document.getElementById('restartBtn');

checkBtn.addEventListener('click', () => {
    const guess = Number(guessInput.value);
    if (!guess || guess < 1 || guess > 100) {
        message.textContent = "Digite um número válido entre 1 e 100!";
        return;
    }

    if (guess === randomNumber) {
        message.textContent = `🎉 Parabéns! Você acertou o número ${randomNumber}!`;
        restartBtn.style.display = 'inline-block';
        checkBtn.disabled = true;
    } else if (guess < randomNumber) {
        message.textContent = "⬆ Tente um número maior!";
    } else {
        message.textContent = "⬇ Tente um número menor!";
    }
});

restartBtn.addEventListener('click', () => {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    message.textContent = '';
    guessInput.value = '';
    checkBtn.disabled = false;
    restartBtn.style.display = 'none';
});
