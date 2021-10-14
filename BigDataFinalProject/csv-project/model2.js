/** Requires BigML Node.js bindings
 *
 * Install via: npm install bigml
 *
 * or clone it:
 *   git clone https://github.com/bigmlcom/bigml-node.git
 */

require('events').EventEmitter.prototype._maxListeners = 70;
require('events').defaultMaxListeners = 70;
var bigml = require('bigml');

const items = [
    "Doll",
    "Cup",
    "Keyboard",
    "Watch",
    "Notebook",
    "Screen",
    "Printer",
    "Bag",
    "Chair",
    "Towel",
    "Bucket",
    "Charger",
    "Knife",
    "Matress",
    "Table",
    "Tooth Brush",
    "Vase",
    "Bracelet",
    "Wallet",
    "Letherman",
    "Calculator",
    "Perfume",
    "Fan",
    "Sunglasses",
    "Flag",
    "Surff Board",
    "Statue",
    "Jar",
    "C-Hub",
    "Pants",
    "T-Shirt",
    "Underwear",
    "Sneakers",
    "Mouse",
    "Electric Scooter",
    "Electric Drill",
    "Shampoo",
    "Razor",
    "Deodorant",
    "Toilet Paper",
    "EarBuds",
    "Usb Cable",
    "HeadPhones",
    "Remote Control",
    "Covid Masks",
    "Bottle",
    "HDMI Cable",
    "Pens",
    "Ball",
    "IPad",
    "Laptop",
    "Speaker"
];

var predict_table = []
var products_size = items.length





// Downloads and generates a local version of the ASSOCIATION.
var association = new bigml.LocalAssociation(
    'association/616881b199dfe70749007375', new bigml.BigML("bigdatacourse2021", "ad08ca86c30c5a51417e95ea2dd5e12ab6d461c7", { "domain": "bigml.io" }));

var flag = false

async function buildtable() {
    for (let i = 0; i < items.length; i++) {
        var inputData = {
            "field1": items[i],
        };
        if (i === items.length - 1) {
            flag = true
        }
        await get_ass(inputData, flag)

    }

}

async function get_ass(inputData) {

    association.associationSet(inputData, function (error, data) {
        var line = []
        line.push(inputData.field1)
        for (let index2 = 0; index2 < data.length; index2++) {
            line.push(data[index2].item.name)
            line.push(data[index2].score)
        }
        push_to_table(line)
        if (flag) {   print_table()     }
    });
}

async function push_to_table(arr) {
    predict_table.push(arr)

}
function print_table() {
   // print to dashboard.
    console.log(predict_table)
    
}




buildtable()