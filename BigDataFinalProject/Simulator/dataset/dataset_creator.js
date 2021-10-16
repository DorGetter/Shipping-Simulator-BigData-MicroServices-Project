var fs = require('fs');
var p_gen = require('./generator');

var list_json = []


for (let index = 0; index < 5000; index++) {
    var package = p_gen.createPackage();
    list_json[index] = package
    package = null;
}

console.log(list_json)
var lineArray = []
list_json.forEach(function (list_json, index) {
    var line = list_json.join(",");
    lineArray.push(line);
});
var csvContent = lineArray.join("\n");

console.log(csvContent)


fs.writeFile('./Associations.csv', csvContent, 'utf8', function (err) {
    if (err) {
        console.log('Some error occured - file either not saved or corrupted file saved.');
    } else {
        console.log('It\'s saved!');
    }
});


// // Option 1:
// // import stringify from 'csv-stringify';
// var stringify = require('csv-stringify');

// stringify(csvContent, { header: true, columns: columns }, (err, output) => {
//     if (err) throw err;
//     fs.writeFile('Associations.csv', output, (err) => {
//         if (err) throw err;
//         console.log('Associations.csv saved.');
//     });
// });


// // Option 2:
// import { watch } from 'fs';
// watch('./Associations.csv', (eventType, csvContent) => {
//     console.log(`event type is: ${eventType}`);
//     if (csvContent) {
//         console.log(`filename provided: ${csvContent}`);
//     } else {
//         console.log('filename not provided');
//     }
// });

