const Reader = require("./Reader");
const Processor = require("./Processor");
const Table = require("./Table");
const HtmlParser = require("./HtmlParser");

var leitor = new Reader();

async function main() {
  var data = await leitor.Read("./users.csv");
  var dataProcess = Processor.Process(data);

  var users = new Table(dataProcess);
  var html = await HtmlParser.Parser(users);

  console.log(html);
}

main();
