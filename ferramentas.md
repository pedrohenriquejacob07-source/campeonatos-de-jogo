 # html : Quais elementos estão sendo usados?
1. <!DOCTYPE html>

Define o documento como HTML5.

2. <html>

Elemento raiz que envolve toda a página.

3. <head>

Contém configurações do documento, como título, charset e link para CSS.

4. <meta>

Utilizadas para definir codificação e responsividade.

5. <title>

Define o título da página no navegador.

6. <link>

Importa o arquivo CSS externo.

7. <body>

Contém todo o conteúdo visível da página.

8. <header>

Usado para conter o menu do site.

9. <nav>

Indica a área de navegação (menu).

10. <ul> e <li>

Criam listas para os itens do menu.

11. <a>

Links usados no menu para navegar entre as seções da página.

12. <section>

Cada bloco de conteúdo principal da página está dentro de uma seção.

13. <h2>

Títulos das seções (como “League of Legends – Worlds”).

14. <p>

Parágrafos com o conteúdo explicativo.

15. <form>

Formulário de inscrição.

16. <label>

Rótulos para os campos do formulário.

17. <input>

Campo para digitar o nome do usuário.

18. <select> e <option>

Menu suspenso para escolha do jogo.

19. <button>

Botão animado para enviar a inscrição.

20. <footer>

Rodapé contendo o nome do criador.

21. <script>

Importa o arquivo JavaScript externo.
 # css: Quais propriedades estão sendo usadas?
 margin

padding

width

height

background

background-color

background: linear-gradient()

box-shadow

border

border-radius

position

top

z-index

display

gap

justify-content

2. Tipografia

font-family

font-size

font-weight

color

text-decoration

text-align

3. Elementos de lista e navegação

list-style

cursor

4. Efeitos e animações

transition

transform

opacity

5. Efeitos visuais extras

box-shadow

background: linear-gradient()

6. Formulário

border

border-radius

font-size

width

7. Interação com usuário (hover)

:hover (pseudo-classe)

transform: scale()

background-color (dentro do hover)

box-shadow (no hover)
 # js : Ha algum recurso javascript?
 Usado para acessar elementos do HTML pelo atributo id, como:

Campo de nome

Campo de jogo

Parágrafo de mensagem

Formulário

Permite manipular o conteúdo desses elementos.

2. addEventListener("submit", ...)

Utilizado para capturar o evento de envio do formulário.
Com isso, podemos controlar o que acontece quando o usuário clica no botão.

3. event.preventDefault()

Impede que o formulário seja enviado da maneira tradicional (recarregando a página).
Assim, a resposta é exibida direto na tela.

4. Manipulação de texto e conteúdo

Uso de:

element.innerHTML

element.innerText

Serve para escrever mensagens na tela, como a confirmação de inscrição.

5. Manipulação de CSS via JS

Exemplo:

mensagem.style.color

mensagem.style.opacity

mensagem.style.transition

mensagem.style.marginTop

Permite criar efeitos visuais controlados pelo JavaScript.

6. Temporização com setTimeout()

Utilizada para criar uma pequena animação suave na exibição da mensagem, aplicando uma transição após alguns milissegundos.

⭐ Resumo dos recursos usados

Manipulação do DOM

Eventos de formulário

Controle de envio (preventDefault)

Edição de estilos via JavaScript

Atualização dinâmica de conteúdo

Pequena animação usando setTimeout