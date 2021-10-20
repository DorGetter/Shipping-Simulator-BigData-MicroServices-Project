//-------------------------------Enums---------------------------------------------//

// enum items //
const items = [

    { "type": "Cup", "cost": 6.90, "size": "S" },
    { "type": "Keyboard", "cost": 199.90, "size": "M" },
    { "type": "Watch", "cost": 899.90, "size": "S" },
    { "type": "Notebook", "cost": 13.90, "size": "M" },
    { "type": "Screen", "cost": 569.90, "size": "M" },
    { "type": "Printer", "cost": 369.90, "size": "M" },
    { "type": "Bag", "cost": 149.90, "size": "M" },
    { "type": "Chair", "cost": 169.90, "size": "L" },
    { "type": "Towel", "cost": 74.90, "size": "M" },
    { "type": "Bucket", "cost": 27.90, "size": "M" },
    { "type": "Charger", "cost": 79.90, "size": "S" },
    { "type": "Knife", "cost": 15.99, "size": "S" },
    { "type": "Matress", "cost": 3469.90, "size": "L" },
    { "type": "Table", "cost": 529.90, "size": "L" },
    { "type": "Tooth Brush", "cost": 19.90, "size": "S" },
    { "type": "Vase", "cost": 79.99, "size": "M" },
    { "type": "Bracelet", "cost": 35.90, "size": "S" },
    { "type": "Wallet", "cost": 214.90, "size": "S" },
    { "type": "Letherman", "cost": 599.90, "size": "S" },
    { "type": "Calculator", "cost": 99.90, "size": "S" },
    { "type": "Perfume", "cost": 249.90, "size": "S" },
    { "type": "Fan", "cost": 89.99, "size": "M" },
    { "type": "Sunglasses", "cost": 390.90, "size": "S" },
    { "type": "Flag", "cost": 23.90, "size": "M" },
    { "type": "Surff Board", "cost": 799.90, "size": "L" },
    { "type": "Statue", "cost": 1999.90, "size": "L" },
    { "type": "Jar", "cost": 10.99, "size": "S" },
    { "type": "C-Hub", "cost": 179.90, "size": "S" },
    { "type": "Pants", "cost": 149.90, "size": "M" },
    { "type": "T-Shirt", "cost": 69.90, "size": "M" },
    { "type": "Underwear", "cost": 39.90, "size": "S" },
    { "type": "Sneakers", "cost": 397.99, "size": "M" },
    { "type": "Mouse", "cost": 74.90, "size": "S" },
    { "type": "Electric Scooter", "cost": 4499.90, "size": "L" },
    { "type": "Electric Drill", "cost": 699.90, "size": "M" },
    { "type": "Shampoo", "cost": 15.90, "size": "M" },
    { "type": "Razor", "cost": 89.90, "size": "S" },
    { "type": "Deodorant", "cost": 19.90, "size": "S" },
    { "type": "Toilet Paper", "cost": 39.90, "size": "M" },
    { "type": "Doll", "cost": 49.90, "size": "M" },
    { "type": "EarBuds", "cost": 699.99, "size": "S" },
    { "type": "Usb Cable", "cost": 49.90, "size": "S" },
    { "type": "HeadPhones", "cost": 399.90, "size": "S" },
    { "type": "Remote Control", "cost": 29.90, "size": "S" },
    { "type": "Covid Masks", "cost": 10.99, "size": "S" },
    { "type": "Bottle", "cost": 6.99, "size": "S" },
    { "type": "HDMI Cable", "cost": 79.90, "size": "S" },
    { "type": "Pens", "cost": 5.90, "size": "S" },
    { "type": "Ball", "cost": 69.90, "size": "M" },
    { "type": "Ipad", "cost": 4299.90, "size": "M" },
    { "type": "Laptop", "cost": 4999.90, "size": "M" },
    { "type": "Speaker", "cost": 279.90, "size": "L" }
];

// enum adresses //
let adresses = {
    // Center
    a0: "Levenberg 10 Kfar-Saba",
    a1: "Hamapilim 12 Hod-Hasharon",
    a2: "Shalva 98 Herzliya",
    a3: "Ahoza 129 Raanana",
    a4: "Frishman 9 Tel Aviv",

    // North
    a5: "Hanevim 52 Haifa",
    a6: "Ha-Aliya 64 Naharia",
    a7: "Shoham 7 Katzrin",
    a8: "Tagger 3 Tiberias",
    a9: "Aquaduct 30 Caesarea",

    // South
    a10: "Exodus 91 Ashdod",
    a11: "Yefe-Nof 41 Ashkelon",
    a12: "Tel Hai 111 Beer Sheva",
    a13: "Sderot Argaman 44 Eilat",
    a14: "Nahal 5 Kiryat Gat",

    // Haifa
    a15: "Sderot Trumpeldor 15 Haifa",
    a16: "Baruh Cohen 2 Haifa",
    a17: "Yakinton 36 Haifa",
    a18: "Alexander Zeid 9 Haifa",
    a19: "Arlozorov 99 Haifa",


    // Jerusalem
    a20: "Hillel 7 Jerusalem",
    a21: "Yafo 49 Jerusalem",
    a22: "Keren Hayesod 30 Jerusalem",
    a23: "Costa Rica 44 Jerusalem",
    a24: "Kikar Safra 1 Jerusalem",


    // Dan
    a25: "Dizingof 54 Tel-Aviv",
    a26: "Mordei Hageta'ot 36 Rishon Lezion",
    a27: "Jabutinski 6 Hod Hasharon",
    a28: "Mohalibar 9 Petah Tikva",
    a29: "Hadar 38 Herzliya",
};

// enum regions //
const regions = [
    "center",
    "north",
    "south",
    "haifa",
    "jerusalem",
    "dan"
];


//-------------------------------Functions---------------------------------------------//



// Get tracking number
function getTrackingNum() {
    return Math.floor(Math.random() * 89999999 + 10000000)
}


// Select random items
function getitems() {
    var numOfitems = Math.floor(Math.random() * Object.keys(items).length/5)
    if (numOfitems == 0) { numOfitems = 1 }
    const shuffled = items.sort(() => 0.5 - Math.random());
    let selectedItems = shuffled.slice(0, numOfitems);
    return selectedItems;
}


// Calc total cost 
function getTotalCost(selectedItems) {
    var totalCost = 0
    for (const element of selectedItems) {
        totalCost += element.cost;
    }
    return totalCost;
}


// Calc package size
function getPackageSize(selectedItems) {
    var Largeitems = 0
    var Smallitems = 0
    var Mediumitems = 0
    for (const element of selectedItems) {
        if (element.size == "L") { Largeitems += 1 }
        else if (element.size == "S") { Smallitems += 1 }
        else { Mediumitems += 1 }
    }

    if (Largeitems > 0) { return "L"; }
    if (Mediumitems > 5) { return "L"; }
    if (Smallitems > 20) { return "L"; }
    if (Largeitems == 0 && Mediumitems > 0 && Smallitems > 0) { return "L"; }
    if (Largeitems == 0 && Smallitems == 0 && Mediumitems > 0) { return "M"; }
    if (Largeitems == 0 && Mediumitems == 0 && Smallitems > 10) { return "M"; }
    else
        return "S";
}


// Calc taxes 
function getTax(totalcost) {
    var importTax = 0
    if (totalcost <= 75) { importTax = "Tax Free" }

    else if (totalcost > 75 && totalcost <= 500) { importTax = "Taxable package" }

    else { importTax = "VAT, purchase Tax & Customs" }

    return importTax;
}

// select random adress
function getAdress() {
    var randAdress = Math.floor(Math.random() * Object.keys(adresses).length);
    var adr = adresses[Object.keys(adresses)[randAdress]];
    return [adr, randAdress]
}


// select random region
function getRegion(adr_num) {
    if (adr_num < 5) {
        return regions[0];
    }
    else if (adr_num < 10) {
        return regions[1];
    }
    else if (adr_num < 15) {
        return regions[2];
    }
    else if (adr_num < 20) {
        return regions[3];
    }
    else if (adr_num < 25) {
        return regions[4];
    }
    else {
        return regions[5];
    }

}



//-------------------------------Create Package (Main function)---------------------------------------------//
function create_Package() {

    var TrackingNumber = getTrackingNum();
    var Items = getitems();
    var Size = getPackageSize(Items);
    var Totalcost = getTotalCost(Items);
    var Tax = getTax(Totalcost);
    var adr_details = getAdress();
    var Region = getRegion(adr_details[1]);
    var package = {
        trackingNumber: TrackingNumber,
        items: Items,
        size: Size,
        orderCost: Totalcost,
        importTax: Tax,
        adrass: adr_details[0],
        destinationRegion: Region

    }

    var package_Json = JSON.stringify(package)
    return package_Json
}


module.exports = {
    createPackage: create_Package
};


