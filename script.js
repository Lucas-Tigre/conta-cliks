// Cria uma variável chamada "cliques" e define o valor inicial como 0
let cliques = 0;

// Pega o elemento com o ID "botao" (o botão que o usuário clica)
document.getElementById("botao").addEventListener("click", () => {

  // Quando o botão for clicado, aumenta o valor da variável "cliques" em 1
  cliques++;

  // Atualiza o texto do elemento com ID "contador" para mostrar o novo valor de cliques
  document.getElementById("contador").textContent = cliques;

});
