const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Bot HaxBall 24/7 ativo!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));

require("./bot");
