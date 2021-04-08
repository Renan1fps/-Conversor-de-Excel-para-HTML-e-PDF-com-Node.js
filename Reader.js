const fs = require("fs");
class Reader {
  Read(filePath) {
    fs.readFile(filePath, { encoding: "utf-8" }, (erro, dada) => {
      if (erro) {
        console.log(erro.message);
      } else {
        console.log(dada);
      }
    });
  }
}
module.exports = Reader;
