const express = require("express");
const app = express();
const port = 3536;
const produtosDb = [];
const usersDb = [];

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Ola Luan!");
});

app.post("/produtos", (req, res) => {
  const { nome, preco, categoria } = req.body;

  const produto = {
    nome: nome,
    preco: preco,
    categotria: categoria,
  };

  produtosDb.push(produto);
});
res.status(201).send(produto);
app.get("/produtos", (req, res) => {
  res.send(produtosDb);
});

app.post("/usuarios", (req, res) => {
  const { nome, email, senha } = req.body;
  if( !nome || !email || !senha){
    return res.status(400) .send ("email, nome e senha sao obrigatorios")
  }
  usersDb.push({ nome, email, senha });
  res.status(201).send("Usuario Cadastrado Com Sucesso!");
});
app.listen(port, () => {
  console.log(`o servidor esta rodando na porta  ${port}`);
});
