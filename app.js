const Reader = require("./Reader");
const Processor = require("./Processor");
const Table = require("./Table");

var leitor = new Reader();

async function main() {
  var data = await leitor.Read("./users.csv");
  var dataProcess = Processor.Process(data);

  var usuarios = new Table(dataProcess);
  console.log(usuarios.header);
  console.log(usuarios.RowCount);
  console.log(usuarios.ColunsCount);
}

main();
