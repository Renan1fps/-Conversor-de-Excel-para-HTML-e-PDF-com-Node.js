const Reader = require("./Reader");
const Processor = require("./Processor");
const Table = require("./Table");
const HtmlParser = require("./HtmlParser");
const Writer = require("./Writer");

var leitor = new Reader();
var writer = new Writer();

async function main() {
  var data = await leitor.Read("./users.csv");
  var dataProcess = Processor.Process(data);

  var users = new Table(dataProcess);
  var html = await HtmlParser.Parser(users);

  writer.Write(Date.now()+".html", html);
}

main();
