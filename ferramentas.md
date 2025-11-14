 # html : Quais elementos estão sendo usados?
<!DOCTYPE html>: Isso fala pro navegador que é HTML5, tipo “ei, lê esse arquivo como HTML moderno”.

<html lang="pt-BR">: É a raiz do documento, e o lang indica que tá em português.

<head>: Aqui fica a parte “invisível” da página, tipo título, links de CSS, essas coisas.

<meta charset="UTF-8">: Serve pra deixar os acentos e símbolos certinhos.

<meta name="viewport"...>: Faz a página funcionar legal no celular, tipo responsiva.

<title>: O título que aparece na aba do navegador.

<link rel="stylesheet"...>: Linka nosso CSS pra página ficar estilizada.

Aí dentro do <body> que é a parte que a gente vê na tela:

<div class="container">: Um contêiner pra organizar o conteúdo.

<h1>: Título grande, tipo “Jogo de Adivinhação”.

<p>: Parágrafos, pra colocar a história ou instruções.

<a href="jogo.html" class="button">: Um link que funciona como botão pra começar o jogo.

Na página do jogo (jogo.html) tem uns elementos extras pra interatividade:

<input type="number">: Campo pra gente digitar o número que acha que é o certo.

<button>: Botão que envia o palpite ou reinicia o jogo.

<p id="feedback">: Mostra se o palpite tá alto, baixo ou se acertou.

<p id="attempts">: Mostra quantas tentativas a gente já fez.

Então, resumindo, é tudo bem simples: tem contêiner, título, parágrafos, input e botão, tudo organizado pra ficar bonitinho e interativo.

Por fim, o JavaScript é incluído através do <script src="script.js"></script>, permitindo a lógica do jogo, como gerar números aleatórios, comparar palpites e reiniciar a partida. Todos esses elementos foram usados de forma semântica, clara e funcional, garantindo que a página seja acessível, responsiva e interativa.

 # css: Quais propriedades estão sendo usadas?
 Corpo da página (body)


font-family → Define a fonte do texto.


background → Deixa um gradiente colorido de fundo.


background-size → Faz o gradiente cobrir toda a tela.


animation → Faz o gradiente se mover devagar, tipo animado.


display: flex; justify-content: center; align-items: center; → Centraliza todo o conteúdo na tela.


height e margin → Faz a tela ocupar 100% da altura e tira a margem padrão.



2. Container (.container)


background → Fundo branco transparente pra destacar o conteúdo.


padding → Espaço interno pra não ficar apertado.


border-radius → Bordas arredondadas.


text-align: center → Centraliza o texto.


box-shadow → Sombra pra dar profundidade.


transition → Anima pequenas transformações.


transform: scale → Faz efeito de zoom quando passa o mouse.



3. Títulos e parágrafos (h1, p)


color → Cor do texto.


text-shadow → Sombra no texto pra destacar.


font-size e margin → Tamanho do texto e espaçamento.



4. Inputs (input[type=number])


padding e width → Deixa maior e confortável pra digitar.


margin → Espaço entre elementos.


border-radius e border → Bordas arredondadas e coloridas.


outline → Remove borda padrão ao focar.


font-size → Tamanho do texto.


transition → Pra animação suave ao focar.


box-shadow → Efeito visual quando o input está focado.



5. Botões (.button)


padding e margin → Tamanho do botão e espaço.


border e border-radius → Bordas arredondadas e sem borda padrão.


background → Gradiente de cor bonito.


color → Cor do texto.


cursor: pointer → Muda o cursor quando passa o mouse.


font-size → Tamanho do texto.


box-shadow → Sombra pra dar profundidade.


transition e transform → Animação suave ao passar o mouse (hover).



6. Feedback (#feedback)


font-size e font-weight → Texto maior e mais chamativo.


color → Muda de cor dependendo se o palpite foi alto, baixo ou acertou.


animation → Pequena animação quando dá feedback (shake ou jump).



7. Animações (@keyframes)


shake → Faz o texto t


 # js : Ha algum recurso javascript?
 No nosso jogo, o JavaScript é o que faz ele realmente interativo. Primeiro, ele cria um número secreto aleatório entre 1 e 100 usando Math.random() e Math.floor(). Esse número é o que o jogador precisa adivinhar.

Depois, toda vez que o jogador digita um palpite e clica no botão, o JS verifica se o número está certo, alto ou baixo usando um if/else. Dependendo do resultado, ele atualiza o texto de feedback na tela, tipo “Muito alto!”, “Muito baixo!” ou “Acertou!”.

Além disso, o JS conta as tentativas. Cada vez que o jogador chuta um número, ele soma 1 na variável attempts e mostra isso na tela.

O JS também modifica elementos da página, como mostrar ou esconder o botão de reiniciar quando o jogador acerta. Ele faz isso mudando propriedades do CSS e do conteúdo dos elementos do HTML dinamicamente.

Tem ainda a função de reiniciar o jogo, que reseta o número secreto, as tentativas e limpa os textos de feedback, deixando tudo pronto pra jogar de novo.

E pra tudo funcionar, usamos eventos: onclick nos botões para chamar funções quando o jogador clica, e window.onload pra iniciar o jogo assim que a página carrega.

Resumindo, o JavaScript no jogo serve pra criar o número aleatório, verificar palpites, dar feedback visual, contar tentativas, permitir reiniciar o jogo e tornar a experiência interativa.
