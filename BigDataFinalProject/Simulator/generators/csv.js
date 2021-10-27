
var packages = []
var linescsv = []
var p_gen = require('./package_generator');



for (let index = 0; index < 200; index++) {
    package = p_gen.createPackage()
    packages.push(package)
    linescsv.push(toCSV(packages))
    console.log(linescsv)

}

convertJSONtocsv(linescsv)

function toCSV(json) {
    if (json.length === 0) {
        return;
    }
    json = Object.values(json);
    var csv = "";
    var keys = (json[0] && Object.keys(json[0])) || [];
    csv += keys.join(',') + '\n';
    for (var line of json) {
        csv += keys.map(key => line[key]).join(',') + '\n';
    }
    
    return csv;
}



function convertJSONtocsv(json) {
    if (json.length === 0) {
        return;
    }


    const replacer = (key, value) => value === null ? '' : value // specify how you want to handle null values here
    const header = Object.keys(json[0])
    let csv = json.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','))
    csv.unshift(header.join(','))
    csv = csv.join('\r\n')
    const fs = require('fs');

    fs.writeFile('awesome.csv', csv, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
    // fs.writeFileSync('awesome.csv', csv)
}