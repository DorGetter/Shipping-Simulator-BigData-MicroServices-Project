//-------------------------------Enums---------------------------------------------//

// enum items //
const items = [   
    
    {"type": "Cup",              "cost": 6,     "size": "S"},
    {"type": "Keyboard",             "cost": 15,     "size": "S"},
    {"type": "Watch",             "cost": 15,     "size": "S"},
    {"type": "Notebook",             "cost": 15,     "size": "S"},
    {"type": "Screen",             "cost": 15,     "size": "S"},
    {"type": "Printer",             "cost": 15,     "size": "S"},
    {"type": "Bag",             "cost": 15,     "size": "S"},
    {"type": "Chair",             "cost": 15,     "size": "S"},
    {"type": "Towel",             "cost": 15,     "size": "S"},
    {"type": "Bucket",             "cost": 15,     "size": "S"},
    {"type": "Charger",             "cost": 15,     "size": "S"},
    {"type": "Knife",             "cost": 15,     "size": "S"},
    {"type": "Matress",             "cost": 15,     "size": "S"},
    {"type": "Table",             "cost": 15,     "size": "S"},
    {"type": "Tooth Brush",             "cost": 15,     "size": "S"},
    {"type": "Vase",             "cost": 15,     "size": "S"},
    {"type": "Bracelet",             "cost": 15,     "size": "S"},
    {"type": "Wallet",             "cost": 15,     "size": "S"},
    {"type": "Letherman",             "cost": 15,     "size": "S"},
    {"type": "Calculator",             "cost": 15,     "size": "S"},
    {"type": "Perfume",             "cost": 15,     "size": "S"},
    {"type": "Fan",             "cost": 15,     "size": "S"},
    {"type": "Sunglasses",             "cost": 15,     "size": "S"},
    {"type": "Flag",             "cost": 15,     "size": "S"},
    {"type": "Surff Board",             "cost": 15,     "size": "S"},
    {"type": "Statue",             "cost": 15,     "size": "S"},
    {"type": "Jar",             "cost": 15,     "size": "S"},
    {"type": "C-Hub",             "cost": 15,     "size": "S"},
    {"type": "Pants",             "cost": 15,     "size": "S"},
    {"type": "T-Shirt",             "cost": 15,     "size": "S"},
    {"type": "Underwear",             "cost": 15,     "size": "S"},
    {"type": "Sneakers",             "cost": 15,     "size": "S"},
    {"type": "Mouse",             "cost": 15,     "size": "S"},
    {"type": "Electric Scooter",             "cost": 15,     "size": "S"},
    {"type": "Electric Drill",             "cost": 15,     "size": "S"},
    {"type": "Shampoo",             "cost": 15,     "size": "S"},
    {"type": "Razor",             "cost": 15,     "size": "S"},
    {"type": "Deodorant",             "cost": 15,     "size": "S"},
    {"type": "Toilet Paper",             "cost": 15,     "size": "S"},
    {"description": "Doll",             "cost": 15,     "size": "S"},
    {"description": "EarBuds",          "cost": 50,     "size": "S"},
    {"description": "Usb Cable",        "cost": 6,      "size": "S"},
    {"description": "HeadPhones",       "cost": 12,     "size": "S"},
    {"description": "Remote Control",   "cost": 19.90,  "size": "S"},
    {"description": "Covid Masks",      "cost": 3,      "size": "S"},
    {"description": "Bottle",           "cost": 8,      "size": "S"},
    {"description": "HDMI Cable",       "cost": 4,      "size": "S"},
    {"description": "Pens",             "cost": 5,      "size": "S"},
    {"description": "Ball",             "cost": 10,     "size": "M"},
    {"description": "Ipad",             "cost": 220,    "size": "M"},
    {"description": "Laptop",           "cost": 299,    "size": "M"},
    {"description": "Speaker",          "cost": 69,     "size": "L"} 
];

// enum adresses //
let adresses = { 
    // center
    a0:     "Levenberg 10 Kfar-Saba",
    a1:     "Hamapilim 12 Hod-Hasharon",
    a2:     "Shalva 98 Herzliya",
    a3:     "Ahoza 129 Raanana",
    a4:     "Frishman 9 Tel Aviv",
    
    // north
    a5:     "Hanevim 52 Haifa",
    a6:     "Ha-Aliya 64 Naharia",
    a7:     "Shoham 7 Katzrin",
    a8:     "Tagger 3 Tiberias",
    a9:     "Aquaduct 30 Caesarea",
    
    // south
    a10:    "Exodus 91 Ashdod",
    a11:    "Yefe-Nof 41 Ashkelon",
    a12:    "Tel Hai 111 Beer Sheva",
    a13:    "Sderot Argaman 44 Eilat",
    a14:    "Nahal 5 Kiryat Gat",

    // Heifa
    a15:   "",
    a16:   "",
    a17:   "",
    a18:   "",
    a19:   "",
    

    // Jerusalem
    a20:   "",
    a21:   "",
    a22:   "",
    a23:   "",
    a24:   "",
    

    // Dan
    a25:   "",
    a26:   "",
    a27:   "",
    a28:   "",
    a29:   "",
};

// enum regions //
const regions = [
    "center", // needs to add: 'jerusalem', 'dan', 'haifa'
    "north",
    "south",
    "heifa",
    "jerusalem",
    "dan"
];


//-------------------------------Functions---------------------------------------------//



// Get tracking number
function getTrackingNum(){
    return Math.floor(Math.random() * 89999999 + 10000000) 
}


// Select random items
function getitems() {
    var numOfitems =  Math.floor(Math.random() * Object.keys(items).length)
    if (numOfitems == 0) {numOfitems = 1}
    const shuffled = items.sort(() => 0.5 - Math.random());
    let selectedItems = shuffled.slice(0, numOfitems);
    return selectedItems;
}


// Calc total cost 
function getTotalCost( selectedItems) {
    var totalCost = 0
    for (const element of selectedItems) {
        totalCost += element.cost;
    }
    return totalCost;
}


// Calc package size
function getPackageSize(selectedItems){
    var Largeitems = 0
    var Smallitems = 0
    var Mediumitems = 0
    for (const element of selectedItems) {
        if (element.size == "L")        {Largeitems  +=1}
        else if (element.size == "S")   {Smallitems  +=1}
        else                            {Mediumitems +=1}
    }

    if(Largeitems > 0)
        {return "L";}
    if(Mediumitems > 5)
        {return "L";}   
    if(Smallitems > 20)
        {return "L";}
    if(Largeitems == 0 && Mediumitems > 0 && Smallitems > 0)
        {return "L";}
    if(Largeitems == 0 && Smallitems == 0 && Mediumitems > 0)
        {return "M";}
    if(Largeitems == 0 && Mediumitems == 0 && Smallitems > 10)
        {return "M";}
    else
        return "S"; 
}


// Calc taxes 
function getTax(totalcost){
    var importTax = 0
    if(totalcost <= 75)
        {importTax = "Tax Free"}

    else if(totalcost > 75 && totalcost <= 500)
        {importTax = "Taxable package"}

    else
        {importTax = "VAT, purchase Tax & Customs"}

    return importTax;
}

// select random adress
function getAdress(){
    var randAdress = Math.floor(Math.random() * Object.keys(adresses).length);
    var adr = adresses[Object.keys(adresses)[randAdress]];
    return [adr, randAdress]
}


// select random region
function getRegion(adr_num) {
    if(adr_num < 5){
        return regions[0]; 
    }
    else if(adr_num < 10){
        return regions[1]; 
    }
    else if(adr_num < 15){
        return regions[2]; 
    }
    else if(adr_num < 20){
        return regions[3]; 
    }
    else if(adr_num < 25){
        return regions[4]; 
    }
    else {
        return regions[5];
    }

}



//-------------------------------Create Package (Main function)---------------------------------------------//
function create_Package(){

    var TrackingNumber  = getTrackingNum();
    var Items           = getitems();
    var Size            = getPackageSize(Items);
    var Totalcost       = getTotalCost(Items);
    var Tax             = getTax(Totalcost);
    var adr_details     = getAdress();
    var Region          = getRegion(adr_details[1]);
    var package = {
        trackingNumber:     TrackingNumber,
        items:              Items,
        size:               Size,
        orderCost:          Totalcost,
        importTax:          Tax,
        adrass:             adr_details[0],
        destinationRegion:  Region

    }
    
    var package_Json = JSON.stringify(package)
    return package_Json
}


module.exports = {
   createPackage: create_Package
};


