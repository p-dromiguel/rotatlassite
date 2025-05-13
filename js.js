// Lista de destinos para o autocompletar
const destinations = [
  "Paris", "Nova York", "Londres", "Rio de Janeiro", "Tóquio",
  "Dubai", "São Paulo", "Buenos Aires", "Lisboa", "Madrid",
  "Roma", "Sydney", "Berlim", "Amsterdã", "Bangkok", "Angra dos Reis"
];

// Função para mostrar sugestões na busca
function showSuggestions(query) {
  const suggestionsList = document.getElementById("suggestions-list");
  suggestionsList.innerHTML = "";

  if (query === "") return;

  const filtered = destinations.filter(dest =>
    dest.toLowerCase().startsWith(query.toLowerCase())
  );

  filtered.forEach(dest => {
    const item = document.createElement("li");
    item.textContent = dest;
    item.onclick = () => {
      document.getElementById("search-bar").value = dest;
      suggestionsList.innerHTML = "";
    };
    suggestionsList.appendChild(item);
  });
}

// Função para sugerir destino aleatório
function surpreendaMe() {
  const destino = destinations[Math.floor(Math.random() * destinations.length)];
  const texto = `Você foi sorteado com: ${destino}! Aproveite essa viagem.`;

  document.getElementById("nome-destino").textContent = destino;
  document.getElementById("texto-gerado").textContent = texto;
}
