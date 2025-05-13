document.addEventListener("DOMContentLoaded", () => {
    const userArea = document.getElementById("user-area");
    const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
  
    if (usuarioLogado) {
      userArea.innerHTML = `
        <button class="login-btn" onclick="window.location.href='perfil.html'">Olá, ${usuarioLogado.nome}</button>
        <button class="explore-btn" onclick="logout()">Sair</button>
      `;
    } else {
      userArea.innerHTML = `
        <button class="login-btn" onclick="window.location.href='login.html'">Login</button>
        <button class="explore-btn" onclick="window.location.href='cadastrar.html'">Explore o Destino</button>
      `;
    }
  });
  
  function logout() {
    localStorage.removeItem("usuarioLogado");
    window.location.reload();
  }
  