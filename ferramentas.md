 # html : Quais elementos estão sendo usados?
<!DOCTYPE html> → indica que o documento é feito em HTML5.

<html lang="pt-BR"> → define que o site está em português.

<head> → guarda informações do site, como o título e o link para o CSS.

<meta charset="UTF-8"> → permite usar acentos e letras com ç.

<meta name="viewport" content="width=device-width, initial-scale=1.0"> → deixa o site responsivo (funciona bem em celular e computador).

<title> → mostra o nome do site na aba do navegador.

<link rel="stylesheet" href="style.css"> → conecta o HTML ao arquivo de estilo (CSS).

No corpo do site:

<body> → é onde ficam os conteúdos visíveis.

<div class="container"> → é uma “caixa” usada para centralizar os textos e organizar a página.

<h1> → título principal (exemplo: “Adivinhe o Número”).

<p> → textos explicativos, instruções e mensagens.

<a href="..."> → são links usados para navegar entre as páginas (por exemplo, ir para o menu ou voltar).

<input type="number"> → campo onde o jogador digita o palpite (só aceita números).

<button> → botão usado para confirmar o palpite.

<p id="mensagem"> e <p id="tentativas"> → mostram as respostas e o número de tentativas.

 Resumindo:
O HTML cria toda a parte “visível” do jogo — os textos, botões e campos onde o jogador digita.


 # css: Quais propriedades estão sendo usadas?
 Algumas propriedades usadas:

font-family → muda a fonte da letra.

background → define o fundo, que no jogo é um degradê colorido.

color → muda a cor do texto (nesse caso, branco).

text-align → centraliza os textos na tela.

margin e padding → ajustam os espaços externos e internos dos elementos.

display: flex, justify-content e align-items → centralizam todo o conteúdo no meio da tela.

border-radius → deixa as bordas arredondadas.

box-shadow → cria uma sombra ao redor das caixas, dando um efeito bonito.

width e max-width → controlam o tamanho das caixas e deixam o site responsivo.

transition → cria uma animação suave quando passamos o mouse sobre os botões.

:hover → muda a cor do botão quando o usuário passa o mouse por cima.

 Resumindo:
O CSS deixa o site visualmente agradável e organizado.
Sem ele, o jogo ficaria só com texto preto em um fundo branco.

 # js : Ha algum recurso javascript?
O que está sendo usado:

let → cria variáveis (como o número secreto e o contador de tentativas).

Math.random() → gera um número aleatório entre 0 e 1.

Math.floor() → arredonda esse número para baixo (deixa ele inteiro).
→ juntando os dois, o jogo cria um número entre 1 e 100.

document.getElementById() → serve para o JavaScript “enxergar” os elementos do HTML (como o campo de palpite e os parágrafos).

.value → pega o valor digitado pelo jogador.

.textContent → muda o texto de um elemento na tela (por exemplo, mostrar “Você acertou!”).

addEventListener('click') → espera o jogador clicar no botão e, quando isso acontece, executa o código do jogo.

if / else if / else → estrutura de decisão usada para comparar o palpite com o número secreto.

Se for igual → mostra que acertou.

Se for menor → mostra “O número é maior!”.

Se for maior → mostra “O número é menor!”.

mensagem.style.color = "limegreen" → muda a cor da mensagem de acordo com o resultado.

 Resumindo:
O JavaScript é o cérebro do site — ele controla o funcionamento do jogo, cria o número aleatório, conta as tentativas e mostra as mensagens na tela. 


explicando melhor meu site de jogo ao meu ver como funciona:
O HTML é a estrutura, é onde ficam os textos, botões e campos do jogo.
O CSS é a parte visual, ele deixa o site bonito, colorido e centralizado.
O JavaScript é a parte inteligente, que faz o jogo funcionar de verdade — ele cria o número secreto, compara com o palpite do jogador e mostra as mensagens de vitória ou erro.