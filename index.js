const fs = require("fs");
// fs.readFile("./texto.txt", { encoding: "utf-8" }, (erro, daddos) => {
//   if (erro) {
//     console.log("Ocorreum um erro" + erro.message);
//   } else {
//     console.log(daddos);
//   }
// });

// fs.writeFile("./texto.txt", "Novo conteudo", (erro) => {
//   if (erro) {
//     console.log(erro.message);
//   }
// });

fs.readFile("./usuario.json", { encoding: "utf-8" }, (erro, dados) => {
  if (erro) {
    console.log(erro.message);
  } else {
    var conteudo = JSON.parse(dados); //converte para objeto js
    conteudo.nome = "levi";
  
    fs.writeFile("./usuario.json", JSON.stringify(conteudo), (erro) => {
      if (erro) {
        console.log(erro.message);
      }
    });
  }
});
