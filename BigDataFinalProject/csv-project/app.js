const CSVToJSON = require("csvtojson");
const JSONToCSV = require("json2csv").parse;
const FileSystem = require("fs");
var p_gen = require('./generator');


var list_json = []


for (let index = 0; index < 10; index++) {
    var package = p_gen.createPackage();
    list_json[index] = package
    package = null;
}


console.log(list_json)

list_json.forEach(function (infoArray, index) {
    var line = list_json.join(",");
    lineArray.push(index == 0 ? "data:text/csv;charset=utf-8," + line : line);
});
var csvContent = lineArray.join("\n");

