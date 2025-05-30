let cliques = 0; // Inicializa a variável que vai contar os cliques com 0

// Pega o botão pelo ID "botao" e adiciona um ouvinte para quando ele for clicado
document.getElementById("botao").addEventListener("click", () => {
  cliques++; // Aumenta o valor da variável "cliques" em 1
  document.getElementById("contador").textContent = cliques; // Atualiza o texto do elemento "contador" com o novo valor
});
