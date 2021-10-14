
var packages = []
var p_gen = require('./package_generator');
for (let index = 0; index < 1; index++) {
    package = p_gen.createPackage()
    packages.push(package)
    // toCSV(json)
    console.log(package)
    
}


// function toCSV(json) {
//     json = Object.values(json);
//     var csv = "";
//     var keys = (json[0] && Object.keys(json[0])) || [];
//     csv += keys.join(',') + '\n';
//     for (var line of json) {
//       csv += keys.map(key => line[key]).join(',') + '\n';
//     }
//     return csv;
//   }
  
//   console.log(toCSV(json));

// // function convertJSONtocsv(json) {
// //     if (json.length === 0) {
// //         return;
// //     }


// //     const replacer = (key, value) => value === null ? '' : value // specify how you want to handle null values here
// //     const header = Object.keys(json[0])
// //     let csv = json.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','))
// //     csv.unshift(header.join(','))
// //     csv = csv.join('\r\n')

// //     fs.writeFileSync('awesome.csv', csv)
// // }