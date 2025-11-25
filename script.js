/* Mostrar seções */
function mostrar(secao) {
  const todas = document.querySelectorAll("section");
  todas.forEach(s => s.classList.add("escondido"));
  document.getElementById(secao).classList.remove("escondido");
}

/* FORMULÁRIO */
document.getElementById("formulario").addEventListener("submit", function(e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const jogo = document.getElementById("jogo-escolhido").value;

  const msg = document.getElementById("mensagem");
  msg.innerHTML = `✔ ${nome}, você foi inscrito no campeonato de <b>${jogo}</b>!`;
  msg.style.color = "#6bff8a";
});

/* MINI JOGO */
let tempoInicio;

function iniciarJogo() {
  const area = document.getElementById("area-jogo");
  const resultado = document.getElementById("resultado-jogo");

  area.innerHTML = "";
  resultado.innerHTML = "";

  const circulo = document.createElement("div");
  circulo.classList.add("circulo");

  circulo.style.top = Math.random() * 240 + "px";
  circulo.style.left = Math.random() * (area.offsetWidth - 60) + "px";

  circulo.onclick = function() {
    const tempoFinal = Date.now() - tempoInicio;
    resultado.innerHTML = `⏱ Seu tempo de reação: <b>${tempoFinal} ms</b>`;
    circulo.remove();
  };

  area.appendChild(circulo);

  const atraso = Math.random() * 2000 + 500;

  setTimeout(() => {
    circulo.style.display = "block";
    tempoInicio = Date.now();
  }, atraso);
}
