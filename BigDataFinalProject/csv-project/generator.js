//-------------------------------Enums---------------------------------------------//

// // enum items //
// const items = [   
//     {"type": "Doll",             "cost": 15,     "size": "S"},
//     {"type": "Cup",              "cost": 6,     "size": "S"},
//     {"type": "Keyboard",             "cost": 15,     "size": "S"},
//     {"type": "Watch",             "cost": 15,     "size": "S"},
//     {"type": "Notebook",             "cost": 15,     "size": "S"},
//     {"type": "Screen",             "cost": 15,     "size": "S"},
//     {"type": "Printer",             "cost": 15,     "size": "S"},
//     {"type": "Bag",             "cost": 15,     "size": "S"},
//     {"type": "Chair",             "cost": 15,     "size": "S"},
//     {"type": "Towel",             "cost": 15,     "size": "S"},
//     {"type": "Bucket",             "cost": 15,     "size": "S"},
//     {"type": "Charger",             "cost": 15,     "size": "S"},
//     {"type": "Knife",             "cost": 15,     "size": "S"},
//     {"type": "Matress",             "cost": 15,     "size": "S"},
//     {"type": "Table",             "cost": 15,     "size": "S"},
//     {"type": "Tooth Brush",             "cost": 15,     "size": "S"},
//     {"type": "Vase",             "cost": 15,     "size": "S"},
//     {"type": "Bracelet",             "cost": 15,     "size": "S"},
//     {"type": "Wallet",             "cost": 15,     "size": "S"},
//     {"type": "Letherman",             "cost": 15,     "size": "S"},
//     {"type": "Calculator",             "cost": 15,     "size": "S"},
//     {"type": "Perfume",             "cost": 15,     "size": "S"},
//     {"type": "Fan",             "cost": 15,     "size": "S"},
//     {"type": "Sunglasses",             "cost": 15,     "size": "S"},
//     {"type": "Flag",             "cost": 15,     "size": "S"},
//     {"type": "Surff Board",             "cost": 15,     "size": "S"},
//     {"type": "Statue",             "cost": 15,     "size": "S"},
//     {"type": "Jar",             "cost": 15,     "size": "S"},
//     {"type": "C-Hub",             "cost": 15,     "size": "S"},
//     {"type": "Pants",             "cost": 15,     "size": "S"},
//     {"type": "T-Shirt",             "cost": 15,     "size": "S"},
//     {"type": "Underwear",             "cost": 15,     "size": "S"},
//     {"type": "Sneakers",             "cost": 15,     "size": "S"},
//     {"type": "Mouse",             "cost": 15,     "size": "S"},
//     {"type": "Electric Scooter",             "cost": 15,     "size": "S"},
//     {"type": "Electric Drill",             "cost": 15,     "size": "S"},
//     {"type": "Shampoo",             "cost": 15,     "size": "S"},
//     {"type": "Razor",             "cost": 15,     "size": "S"},
//     {"type": "Deodorant",             "cost": 15,     "size": "S"},
//     {"type": "Toilet Paper",             "cost": 15,     "size": "S"},
//     {"type": "EarBuds",          "cost": 50,     "size": "S"},
//     {"type": "Usb Cable",        "cost": 6,      "size": "S"},
//     {"type": "HeadPhones",       "cost": 12,     "size": "S"},
//     {"type": "Remote Control",   "cost": 19.90,  "size": "S"},
//     {"type": "Covid Masks",      "cost": 3,      "size": "S"},
//     {"type": "Bottle",           "cost": 8,      "size": "S"},
//     {"type": "HDMI Cable",       "cost": 4,      "size": "S"},
//     {"type": "Pens",             "cost": 5,      "size": "S"},
//     {"type": "Ball",             "cost": 10,     "size": "M"},
//     {"type": "IPad",             "cost": 220,    "size": "M"},
//     {"type": "Laptop",           "cost": 299,    "size": "M"},
//     {"type": "Speaker",          "cost": 69,     "size": "L"} 
// ];





// enum items //
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


// Select random items
function getitems() {
    var numOfitems =  Math.floor(Math.random() * Object.keys(items).length)
    if (numOfitems == 0) {numOfitems = 1}
    const shuffled = items.sort(() => 0.5 - Math.random());
    let selectedItems = shuffled.slice(0, numOfitems);
    return selectedItems;
}


//-------------------------------Create Package (Main function)---------------------------------------------//
function create_Package(){

    var Items           = getitems();
    // return JSON.stringify(Items)
    return Items
}


module.exports = {
   createPackage: create_Package
};


