// Selecionando elementos
const menu = document.getElementById('menu');
const game = document.getElementById('game');
const startBtn = document.getElementById('startBtn');
const guessBtn = document.getElementById('guessBtn');
const restartBtn = document.getElementById('restartBtn');
const backBtn = document.getElementById('backBtn');
const guessInput = document.getElementById('guessInput');
const feedback = document.getElementById('feedback');

let randomNumber;

// Função para iniciar o jogo
function startGame() {
  menu.classList.add('hidden');
  game.classList.remove('hidden');
  randomNumber = Math.floor(Math.random() * 100) + 1;
  feedback.textContent = '';
  guessInput.value = '';
}

// Função para checar o palpite
function checkGuess() {
  const guess = Number(guessInput.value);
  if (!guess || guess < 1 || guess > 100) {
    feedback.textContent = 'Digite um número entre 1 e 100!';
    return;
  }

  if (guess < randomNumber) {
    feedback.textContent = 'Muito baixo! Tente novamente.';
  } else if (guess > randomNumber) {
    feedback.textContent = 'Muito alto! Tente novamente.';
  } else {
    feedback.textContent = `Parabéns! Você acertou o número ${randomNumber}!`;
  }
}

// Função para reiniciar o jogo
function restartGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  feedback.textContent = '';
  guessInput.value = '';
}

// Voltar ao menu inicial
function backToMenu() {
  game.classList.add('hidden');
  menu.classList.remove('hidden');
}

// Eventos
startBtn.addEventListener('click', startGame);
guessBtn.addEventListener('click', checkGuess);
restartBtn.addEventListener('click', restartGame);
backBtn.addEventListener('click', backToMenu);
