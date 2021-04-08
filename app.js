const Reader = require("./Reader");
const Processor= require("./Processor");

var leitor = new Reader();




async function main() {
  var data = await leitor.Read("./users.csv");
  Processor.Process(data)
}

main();
