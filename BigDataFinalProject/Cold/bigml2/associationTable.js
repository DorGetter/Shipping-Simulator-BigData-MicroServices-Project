const fs = require('fs')

// function getTable() {
//     var json_f = fs.readFileSync('./dataset.json', { encoding: 'utf8', flag: 'r' })
//     var jsonString = JSON.parse(json_f);
//     var items = jsonString['object']['associations']['items']
//     // console.log("inside" ,items)

//     jsonString['object']['associations']['rules'].forEach(function (row) {
//         var lhs = row['lhs'][0]
//         row['lhs'] = items[lhs]['name']
//         var rhs = row['rhs'][0]
//         row['rhs'] = items[rhs]['name']
//     });
//     // console.log("inside" ,items)

//     return jsonString
// }

// var x = getTable()
// console.log(x);


function getTable() {
    var json_f = fs.readFileSync('./dataset.json', { encoding: 'utf8', flag: 'r' })
    var jsonString = JSON.parse(json_f);
    var items = jsonString['object']['associations']['items']
    // console.log("inside" ,items)

    jsonString['object']['associations']['rules'].map(row => {
        var lhs = row['lhs'][0]
        row['lhs'] = items[lhs]['name']
        var rhs = row['rhs'][0]
        row['rhs'] = items[rhs]['name']
    });
    // console.log("inside" ,items)

    return jsonString
}

var x = getTable()
console.log(x);



// function getTable() {
//     fs.readFileSync('./dataset.json', 'utf8', (err, jsonString) => {
//         if (err) {
//             console.log("File read failed:", err)
//             return
//         }
//         var jsonString = JSON.parse(jsonString);
//         var items = jsonString['object']['associations']['items']

//         jsonString['object']['associations']['rules'].forEach(row => {
//             var lhs = row['lhs'][0]
//             row['lhs'] = items[lhs]['name']
//             var rhs = row['rhs'][0]
//             row['rhs'] = items[rhs]['name']
//         });

//         console.log(jsonString['object']['associations']['rules']);
//         return jsonString
//     })
// }
// var x  = getTable()
// console.log(x);