const ejs = require("ejs");

class HtmlParser {
  static async Parser(table) {
    return await ejs.renderFile("./index.ejs", { header: table.header, body: table.rows });
  }
}
module.exports = HtmlParser;
