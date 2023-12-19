const fs = require("fs");

fs.writeFileSync(
  "mensagen.txt",
  "Essa é uma a nossa segunda mensagem escrita pelo módulo fs!"
);

fs.appendFileSync("mensagen.txt", "\nVamo que deu certo de mais!", "utf-8");
