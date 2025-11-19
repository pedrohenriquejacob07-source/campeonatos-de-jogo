let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

function adivinhar() {
  const entrada = document.getElementById("entrada").value;
  const resultado = document.getElementById("resultado");
  const tentativasTexto = document.getElementById("tentativas");
  const btnReiniciar = document.getElementById("btn-reiniciar");

  if (entrada === "") {
    resultado.textContent = "Digite um número!";
    return;
  }

  const numero = Number(entrada);
  tentativas++;

  if (numero === numeroSecreto) {
    resultado.textContent = "🎉 Você acertou! Parabéns!";
    tentativasTexto.textContent = `Tentativas: ${tentativas}`;
    btnReiniciar.classList.remove("hidden");

  } else if (numero < numeroSecreto) {
    resultado.textContent = "🔼 O número é MAIOR!";
  } else {
    resultado.textContent = "🔽 O número é MENOR!";
  }

  tentativasTexto.textContent = `Tentativas: ${tentativas}`;
}

function reiniciar() {
  numeroSecreto = Math.floor(Math.random() * 100) + 1;
  tentativas = 0;

  document.getElementById("resultado").textContent = "";
  document.getElementById("tentativas").textContent = "";
  document.getElementById("entrada").value = "";
  document.getElementById("btn-reiniciar").classList.add("hidden");
}
