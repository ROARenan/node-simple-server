const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.json({ mensagem: "Backend Node.js rodando com Apache Proxy" });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
