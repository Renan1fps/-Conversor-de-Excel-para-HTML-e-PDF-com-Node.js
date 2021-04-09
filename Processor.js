class Processor {
  static Process(data) {
    var splitData = data.split("\r\n");
    var rows = [];
    splitData.forEach((row) => {
      var arrayResult = row.split(",");
      rows.push(arrayResult);
    });
    return rows;
  }
}

module.exports = Processor;
