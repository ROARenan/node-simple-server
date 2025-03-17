function testarAPI() {
    fetch("/api")
        .then((response) => response.json())
        .then((data) => {
            document.getElementById("resposta").textContent = data.mensagem;
        })
        .catch((error) => console.error("Erro na API:", error));
}
