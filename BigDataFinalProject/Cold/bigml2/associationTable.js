const fs = require('fs')
var redis = require('redis');
var publisher = redis.createClient();


function getTable() {
    console.log('function three');
    var JS = fs.readFileSync(__dirname + '/dataset.json', 'utf8');
    var jsonString = JSON.parse(JS);
    var items = jsonString['object']['associations']['items'];

    if (jsonString['object']['associations']['rules'] !== undefined) {

        jsonString['object']['associations']['rules'].forEach(row => {
            var lhs = row['lhs'][0]
            row['lhs'] = items[lhs]['name']
            var rhs = row['rhs'][0]
            row['rhs'] = items[rhs]['name']
        });
        jsonString = jsonString['object']['associations']['rules'];
    }
    console.log("get table done!");
    publisher.publish("table", JSON.stringify(jsonString), function () {

    });


    return jsonString;

}



module.exports.getTable = getTable;
