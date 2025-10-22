let randomNumber;
let attempts;

function startGame() {
  document.getElementById('menu').style.display = 'none';
  document.getElementById('game').style.display = 'block';
  document.getElementById('gameMessage').textContent = '';
  document.getElementById('guessInput').value = '';
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
}

function showInstructions() {
  document.getElementById('menu').style.display = 'none';
  document.getElementById('instructions').style.display = 'block';
}

function exitGame() {
  alert('Obrigado por jogar!');
  window.close(); // Pode não funcionar em todos os navegadores
}

function backToMenu() {
  document.getElementById('game').style.display = 'none';
  document.getElementById('instructions').style.display = 'none';
  document.getElementById('menu').style.display = 'block';
}

function checkGuess() {
  const userGuess = parseInt(document.getElementById('guessInput').value);
  const message = document.getElementById('gameMessage');

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    message.textContent = "Por favor, insira um número válido entre 1 e 100.";
    return;
  }

  attempts++;

  if (userGuess === randomNumber) {
    message.innerHTML = `🎉 Parabéns! Você acertou em ${attempts} tentativa(s)!`;
  } else if (userGuess < randomNumber) {
    message.textContent = "🔼 Tente um número maior.";
  } else {
    message.textContent = "🔽 Tente um número menor.";
  }
}
