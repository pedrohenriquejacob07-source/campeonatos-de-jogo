// Entrar no site → mostrar menu
const intro = document.getElementById("intro");
const menu = document.getElementById("menu");
const enterBtn = document.getElementById("enterBtn");

enterBtn.addEventListener("click", () => {
  intro.style.display = "none";
  menu.style.left = "0";
});

// Alternar áreas
function showSection(id) {
  document.querySelectorAll(".conteudo").forEach(div => {
    div.style.display = "none";
  });
  document.getElementById(id).style.display = "block";
}

// MINI-JOGO
let startBtn = document.getElementById("startGame");
let clickBtn = document.getElementById("clickBtn");
let msg = document.getElementById("gameMsg");

let startTime = 0;
let timeout;

startBtn.addEventListener("click", () => {
  msg.innerText = "Espere...";
  clickBtn.disabled = true;
  clickBtn.style.background = "#444";

  let wait = Math.random() * 3000 + 1500;

  timeout = setTimeout(() => {
    msg.innerText = "CLIQUE AGORA!";
    clickBtn.style.background = "green";
    clickBtn.disabled = false;
    startTime = Date.now();
  }, wait);
});

clickBtn.addEventListener("click", () => {
  if (clickBtn.disabled) return;

  let reaction = Date.now() - startTime;

  msg.innerText = "Seu tempo de reação: " + reaction + " ms";

  clickBtn.disabled = true;
  clickBtn.style.background = "#444";
  clearTimeout(timeout);
});


