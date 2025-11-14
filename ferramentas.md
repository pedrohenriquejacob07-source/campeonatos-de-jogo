 # html : Quais elementos estão sendo usados?
Nos arquivos HTML do projeto, estão sendo usados diversos elementos de forma estruturada e semântica. O documento começa com a declaração <!DOCTYPE html>, que indica que estamos utilizando HTML5, seguida do elemento raiz <html> com o atributo lang="pt-br", definindo que o idioma principal da página é o português do Brasil. Dentro do <html> há o <head>, que contém metadados importantes, como <meta charset="UTF-8">, garantindo que caracteres acentuados sejam exibidos corretamente, e <meta name="viewport" content="width=device-width, initial-scale=1.0">, que torna a página responsiva em diferentes dispositivos. Também está presente o <title>, que define o título que aparece na aba do navegador, e o <link rel="stylesheet" href="style.css">, que importa o arquivo de estilo externo.

O conteúdo visível das páginas está dentro do <body>. Para organizar os elementos, são usados <div>s que funcionam como contêineres: menu-container agrupa o título e os links do menu principal, game-container contém os elementos do jogo de adivinhar números, e story-container envolve o título e o parágrafo da história do jogo. Os títulos principais são definidos com <h1>, como “Jogo de Adivinhação” ou “História do Jogo”, e recebem animações via CSS. No menu, os links são estruturados com uma lista não ordenada <ul> contendo itens <li>, cada um com um <a> que direciona para outra página, permitindo a navegação entre o menu, o jogo e a história.

No jogo, há um campo de entrada <input> do tipo número, identificado com id="guess", que permite ao jogador digitar seu palpite, com atributos min e max limitando os valores entre 1 e 100 e um placeholder que exibe uma dica dentro do campo. Os botões <button> são usados para verificar o palpite e reiniciar o jogo, aparecendo apenas quando o jogador acerta. As mensagens de instrução, dicas ou sucesso são exibidas em <p>, e há <br> para criar espaçamentos visuais entre elementos como botões e links.

Por fim, o JavaScript é incluído através do <script src="script.js"></script>, permitindo a lógica do jogo, como gerar números aleatórios, comparar palpites e reiniciar a partida. Todos esses elementos foram usados de forma semântica, clara e funcional, garantindo que a página seja acessível, responsiva e interativa.

 # css: Quais propriedades estão sendo usadas?
 No arquivo CSS do projeto, diversas propriedades foram usadas para estilizar e animar os elementos de forma moderna e visualmente agradável. Primeiramente, há propriedades globais aplicadas ao body, como font-family, que define a fonte do texto para 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background, que cria um gradiente linear entre tons de azul e verde; margin e padding definidas como zero para remover espaçamentos padrão; text-align: center para centralizar o conteúdo; e color: #333 para definir a cor padrão do texto.

Para links, a propriedade text-decoration: none remove a sublinha padrão, enquanto os botões e links de menu (.menu-btn) usam background-color para cores sólidas ou gradientes, color para definir a cor do texto, padding para espaçamento interno, border-radius para cantos arredondados, font-weight para deixar o texto mais pesado e transition para suavizar efeitos ao passar o mouse. O estado :hover modifica o background-color, criando interatividade visual.

Nos contêineres como .menu-container, .game-container e .story-container, foram usadas propriedades como margin para centralização vertical, padding para espaçamento interno, border-radius para arredondar bordas, background-color com opacidade para dar destaque sobre o fundo e box-shadow para criar profundidade e efeito de elevação.

O campo de entrada (#guess) utiliza padding para espaçamento interno, width para definir a largura, font-size para tamanho da fonte, border-radius para cantos arredondados e border para definir uma borda simples. Os botões usam propriedades similares (padding, margin, border, border-radius, font-size, cursor: pointer) e também background-color e color para cores, com transition para suavidade na interação.

Para animações, a propriedade @keyframes é utilizada, com animação fadeIn que modifica opacity e transform ao longo do tempo, criando efeitos de aparecimento e movimento vertical. Essa animação é aplicada a classes como .animated-title e .animated-text usando a propriedade animation que define o nome da animação, duração, função de tempo (ease-in-out) e comportamento de início.

Em resumo, as propriedades usadas no CSS incluem font-family, background, color, margin, padding, text-align, text-decoration, border-radius, font-weight, transition, width, height, border, box-shadow, cursor, opacity, transform e animation, entre outras, todas aplicadas de forma combinada para criar um layout atraente, responsivo e animado.

 # js : Ha algum recurso javascript?
im, no arquivo JavaScript do projeto há vários recursos e funcionalidades utilizados para tornar o jogo interativo. O JavaScript é responsável por toda a lógica do jogo de adivinhar o número, além de controlar interações com o usuário.

Primeiramente, é usado Math.random() para gerar um número aleatório entre 1 e 100, que será o número secreto que o jogador precisa adivinhar. Em seguida, o script captura elementos do HTML usando document.getElementById(), como o campo de entrada do palpite, os botões e o parágrafo onde as mensagens de feedback serão exibidas.

O código também utiliza event listeners, com addEventListener('click', ...), para detectar quando o jogador clica no botão de verificar o palpite ou no botão de reiniciar o jogo. Dentro dessas funções, são feitas verificações com condicionais if...else if...else para comparar o número digitado com o número secreto, exibindo mensagens diferentes dependendo se o palpite é menor, maior ou igual ao número correto.

Além disso, há o uso de manipulação do DOM, como textContent ou innerHTML, para atualizar dinamicamente o texto do parágrafo com dicas, mensagens de vitória ou instruções, e style.display para mostrar ou esconder o botão de reiniciar após o jogador acertar.

Por fim, o JavaScript também reinicia o jogo ao clicar no botão “Reiniciar Jogo”, gerando um novo número aleatório, limpando o campo de entrada e escondendo novamente o botão de reiniciar, garantindo que o jogador possa jogar quantas vezes quiser.

Em resumo, os recursos JavaScript usados incluem geração de números aleatórios, captura de elementos do DOM, escuta de eventos, condicionais, manipulação de conteúdo e estilo de elementos, tudo combinado para criar a interatividade do jogo.