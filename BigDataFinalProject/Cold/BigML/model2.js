require('events').EventEmitter.prototype._maxListeners = 70;
require('events').defaultMaxListeners = 70;
var bigml = require('bigml');
const { UnorderedBulkOperation } = require('mongodb');


// Downloads and generates a local version of the ASSOCIATION.
var association = new bigml.LocalAssociation(
    'association/616881b199dfe70749007375', new bigml.BigML("bigdatacourse2021", "ad08ca86c30c5a51417e95ea2dd5e12ab6d461c7", { "domain": "bigml.io" }));


async function get_prediction(input_Data) {

    var inputData = {
        "field1": input_Data
    };
    
    var line = []

    association.associationSet(inputData,  await (async function (error, data) {
        line.push(inputData.field1)
        for (let index2 = 0; index2 < data.length; index2++) {
            line.push(data[index2].item.name)
            line.push(data[index2].score)
        }
        console.log("line")
        return line
    }));
 return line
}

var ans = get_prediction("Laptop")
console.log(ans)

module.exports = {
    get_prediction: get_prediction
};