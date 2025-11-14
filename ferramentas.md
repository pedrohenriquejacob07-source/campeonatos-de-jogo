 # html : Quais elementos estão sendo usados?
No HTML que a gente fez, foram usados os seguintes elementos:

<!DOCTYPE html> → define que o arquivo é um documento HTML5.

<html lang="pt-BR"> → é a raiz do documento, e indica que o idioma é português.

<head> → é a parte que guarda informações sobre a página, tipo título e links de CSS.

<meta charset="UTF-8"> → define a codificação de caracteres para português e outros símbolos.

<meta name="viewport" content="width=device-width, initial-scale=1.0"> → faz o site se ajustar em celulares e tablets.

<title> → coloca o título que aparece na aba do navegador.

<link rel="stylesheet" href="style.css"> → conecta o arquivo de CSS.

<body> → é onde fica todo o conteúdo visível da página.

<div> → usado para separar seções, tipo o menu inicial e a tela do jogo.

<h1> e <h2> → títulos da página, <h1> maior e <h2> menor.

<p> → parágrafos, usado pra contar a história e mostrar mensagens de feedback.

<button> → botões que o usuário clica (começar, chutar, reiniciar e voltar).

<input> → campo onde o usuário digita o número que acha que é o certo.

<script src="script.js"></script> → conecta o arquivo JavaScript que faz o jogo funcionar.

 # css: Quais propriedades estão sendo usadas?
 margin e padding → definem o espaço interno (padding) e externo (margin) dos elementos.

box-sizing: border-box → faz com que o padding e a borda sejam incluídos na largura e altura do elemento.

font-family → escolhe o tipo de letra da página.

background / background-color / linear-gradient → define cor ou gradiente de fundo do site.

color → define a cor do texto.

display → controla como o elemento é exibido (ex: flex para alinhar elementos).

justify-content e align-items → usadas com display: flex para centralizar elementos horizontal e verticalmente.

height e width → definem altura e largura dos elementos.

text-align → centraliza o texto.

border e border-radius → cria borda e deixa as bordas arredondadas.

cursor → muda o cursor quando passa o mouse, tipo pointer em botões.

animation → aplica animações nos elementos.

@keyframes → define como a animação acontece, tipo bounce ou fadeIn.

margin-top / margin-bottom → ajusta o espaço acima ou abaixo de elementos específicos.

min-height → garante um tamanho mínimo para o elemento.

class .hidden { display: none; } → esconde elementos quando necessário.
 # js : Ha algum recurso javascript?
 document.getElementById() → serve para pegar elementos do HTML pelo id, tipo botões, input ou parágrafo de feedback.

Variáveis (let) → armazenam valores, como o número aleatório (randomNumber) e o palpite do jogador.

Funções (function) → blocos de código que executam tarefas, tipo:

startGame() → inicia o jogo e mostra a tela do jogo.

checkGuess() → verifica se o número digitado é maior, menor ou igual ao número aleatório.

restartGame() → reinicia o jogo com outro número.

backToMenu() → volta para o menu inicial.

Eventos (addEventListener) → “ouvem” ações do usuário, como clicar em botões, e chamam as funções correspondentes.

Math.random() e Math.floor() → criam o número aleatório de 1 a 100.

Number() → converte o valor do input de texto para número.

Manipulação de classes (classList.add / classList.remove) → mostra ou esconde seções do site (menu ou jogo).

Alteração de texto (textContent) → mostra mensagens para o usuário, tipo “Muito alto!” ou “Parabéns!”.