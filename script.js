let cliques = 0;

document.getElementById("botao").addEventListener("click", () => {
  cliques++;
  document.getElementById("contador").textContent = cliques;
});

