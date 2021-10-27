var express = require('express');
var app = require('express')();
var server = require('http').Server(app);
var redis1 = require('redis');
var redis2 = require('redis');
var redisClient_mes = redis1.createClient();
var subscriber = redis2.createClient();


var firebaseMain = require('./Firebase/fireBaseAssist.js')

redisClient_mes.subscribe('message');

var data = {
    cards: [
        { title: "Center", value: 0, unit: "Packages", fotterIcon: "inventory_2", fotterText: "AVG Capacity", icon: "local_shipping" },
        { title: "North", value: 0, unit: "Packages", fotterIcon: "inventory_2", fotterText: "AVG Capacity", icon: "local_shipping" },
        { title: "South", value: 0, unit: "Packages", fotterIcon: "inventory_2", fotterText: "AVG Capacity", icon: "local_shipping" },
        { title: "Haifa", value: 0, unit: "Packages", fotterIcon: "inventory_2", fotterText: "AVG Capacity", icon: "local_shipping" },
        { title: "Jerusalem", value: 0, unit: "Packages", fotterIcon: "inventory_2", fotterText: "AVG Capacity", icon: "local_shipping" },
        { title: "Dan", value: 0, unit: "Packages", fotterIcon: "inventory_2", fotterText: "AVG Capacity", icon: "local_shipping" }
    ],


    sizes: [
        { title: 'center', small: 0, medium: 0, large: 0 },
        { title: 'north', small: 0, medium: 0, large: 0 },
        { title: 'south', small: 0, medium: 0, large: 0 },
        { title: 'haifa', small: 0, medium: 0, large: 0 },
        { title: 'jerusalem', small: 0, medium: 0, large: 0 },
        { title: 'dan', small: 0, medium: 0, large: 0 }
    ],

    taxes: [
        { title: 'center', tax_free: 0, taxable: 0, heavy_tax: 0 },
        { title: 'north', tax_free: 0, taxable: 0, heavy_tax: 0 },
        { title: 'south', tax_free: 0, taxable: 0, heavy_tax: 0 },
        { title: 'haifa', tax_free: 0, taxable: 0, heavy_tax: 0 },
        { title: 'jerusalem', tax_free: 0, taxable: 0, heavy_tax: 0 },
        { title: 'dan', tax_free: 0, taxable: 0, heavy_tax: 0 }
    ]
}



async function setTotalSizes(msg, operation) {
    if (operation == "0") {
        if (msg.destinationRegion == 'center') {
            data.cards[0].value += 1
        }
        else if (msg.destinationRegion == 'north') {
            data.cards[1].value += 1
        }
        else if (msg.destinationRegion == 'south') {
            data.cards[2].value += 1
        }
        else if (msg.destinationRegion == 'haifa') {
            data.cards[3].value += 1
        }
        else if (msg.destinationRegion == 'jerusalem') {
            data.cards[4].value += 1
        }
        else if (msg.destinationRegion == 'dan') {
            data.cards[5].value += 1
        }
        else { console.log("cards + data corupted"); }
    }
    else {

        if (msg.destinationRegion == 'center') {
            data.cards[0].value -= 1
        }
        else if (msg.destinationRegion == 'north') {
            data.cards[1].value -= 1
        }
        else if (msg.destinationRegion == 'south') {
            data.cards[2].value -= 1
        }
        else if (msg.destinationRegion == 'haifa') {
            data.cards[3].value -= 1
        }
        else if (msg.destinationRegion == 'jerusalem') {
            data.cards[4].value -= 1
        }
        else if (msg.destinationRegion == 'dan') {
            data.cards[5].value -= 1
        }
        else { console.log("cards - data corupted" + msg.destinationRegion); }
    }
}

async function setPackageSizeDistribution(msg, operation) {
    if (operation == "0") {
        if (msg.destinationRegion == 'center') {
            if (msg.size == 'S') { data.sizes[0]['small'] += 1; }
            else if (msg.size == 'M') { data.sizes[0]['medium'] += 1; }
            else { data.sizes[0]['large'] += 1; }
        }
        else if (msg.destinationRegion == 'north') {
            if (msg.size == 'S') { data.sizes[1]['small'] += 1; }
            else if (msg.size == 'M') { data.sizes[1]['medium'] += 1; }
            else { data.sizes[1]['large'] += 1; }
        }
        else if (msg.destinationRegion == 'south') {
            if (msg.size == 'S') { data.sizes[2]['small'] += 1; }
            else if (msg.size == 'M') { data.sizes[2]['medium'] += 1; }
            else { data.sizes[2]['large'] += 1; }
        }
        else if (msg.destinationRegion == 'haifa') {
            if (msg.size == 'S') { data.sizes[3]['small'] += 1; }
            else if (msg.size == 'M') { data.sizes[3]['medium'] += 1; }
            else { data.sizes[3]['large'] += 1; }
        }
        else if (msg.destinationRegion == 'jerusalem') {
            if (msg.size == 'S') { data.sizes[4]['small'] += 1; }
            else if (msg.size == 'M') { data.sizes[4]['medium'] += 1; }
            else { data.sizes[4]['large'] += 1; }
        }
        else if (msg.destinationRegion == 'dan') {
            if (msg.size == 'S') { data.sizes[5]['small'] += 1; }
            else if (msg.size == 'M') { data.sizes[5]['medium'] += 1; }
            else { data.sizes[5]['large'] += 1; }
        }
        else { console.log("sizes + data corupted"); }

    } else {
        if (msg.destinationRegion == 'center') {
            if (msg.size == 'S') { data.sizes[0]['small'] -= 1; }
            else if (msg.size == 'M') { data.sizes[0]['medium'] -= 1; }
            else { data.sizes[0]['large'] -= 1; }
        }
        else if (msg.destinationRegion == 'north') {

            if (msg.size == 'S') { data.sizes[1]['small'] -= 1; }
            else if (msg.size == 'M') { data.sizes[1]['medium'] -= 1; }
            else { data.sizes[1]['large'] -= 1; }
        }
        else if (msg.destinationRegion == 'south') {

            if (msg.size == 'S') { data.sizes[2]['small'] -= 1; }
            else if (msg.size == 'M') { data.sizes[2]['medium'] -= 1; }
            else { data.sizes[2]['large'] -= 1; }
        }
        else if (msg.destinationRegion == 'haifa') {

            if (msg.size == 'S') { data.sizes[3]['small'] -= 1; }
            else if (msg.size == 'M') { data.sizes[3]['medium'] -= 1; }
            else { data.sizes[3]['large'] -= 1; }
        }
        else if (msg.destinationRegion == 'jerusalem') {

            if (msg.size == 'S') { data.sizes[4]['small'] -= 1; }
            else if (msg.size == 'M') { data.sizes[4]['medium'] -= 1; }
            else { data.sizes[4]['large'] -= 1; }
        }
        else if (msg.destinationRegion == 'dan') {
            if (msg.size == 'S') { data.sizes[5]['small'] -= 1; }
            else if (msg.size == 'M') { data.sizes[5]['medium'] -= 1; }
            else { data.sizes[5]['large'] -= 1; }
        }
        else { console.log("sizes - data corupted" + msg.destinationRegion); }
    }
}

async function setPackageTaxDistribution(msg, operation) {
    if (operation == "0") {

        if (msg.destinationRegion == 'center') {
            if (msg.importTax == 'Tax Free') { data['taxes'][0].tax_free += 1; }
            else if (msg.importTax == 'Taxable package') { data['taxes'][0].taxable += 1; }
            else { data['taxes'][0].heavy_tax += 1; }
        }
        else if (msg.destinationRegion == 'north') {

            if (msg.importTax == 'Tax Free') { data['taxes'][1].tax_free += 1; }
            else if (msg.importTax == 'Taxable package') { data['taxes'][1].taxable += 1; }
            else { data['taxes'][1].heavy_tax += 1; }
        }
        else if (msg.destinationRegion == 'south') {

            if (msg.importTax == 'Tax Free') { data['taxes'][2].tax_free += 1; }
            else if (msg.importTax == 'Taxable package') { data['taxes'][2].taxable += 1; }
            else { data['taxes'][2].heavy_tax += 1; }
        }
        else if (msg.destinationRegion == 'haifa') {

            if (msg.importTax == 'Tax Free') { data['taxes'][3].tax_free += 1; }
            else if (msg.importTax == 'Taxable package') { data['taxes'][3].taxable += 1; }
            else { data['taxes'][3].heavy_tax += 1; }
        }
        else if (msg.destinationRegion == 'jerusalem') {

            if (msg.importTax == 'Tax Free') { data['taxes'][4].tax_free += 1; }
            else if (msg.importTax == 'Taxable package') { data['taxes'][4].taxable += 1; }
            else { data['taxes'][4].heavy_tax += 1; }
        }
        else if (msg.destinationRegion == 'dan') {
            if (msg.importTax == 'Tax Free') { data['taxes'][5].tax_free += 1; }
            else if (msg.importTax == 'Taxable package') { data['taxes'][5].taxable += 1; }
            else { data['taxes'][5].heavy_tax += 1; }
        }
        else { console.log("taxes + data corupted "); }

    } else {

        if (msg.destinationRegion == 'center') {
            if (msg.importTax == 'Tax Free') { data['taxes'][0].tax_free -= 1; }
            else if (msg.importTax == 'Taxable package') { data['taxes'][0].taxable -= 1; }
            else { data['taxes'][0].heavy_tax -= 1; }
        }
        else if (msg.destinationRegion == 'north') {

            if (msg.importTax == 'Tax Free') { data['taxes'][1].tax_free -= 1; }
            else if (msg.importTax == 'Taxable package') { data['taxes'][1].taxable -= 1; }
            else { data['taxes'][1].heavy_tax -= 1; }
        }
        else if (msg.destinationRegion == 'south') {

            if (msg.importTax == 'Tax Free') { data['taxes'][2].tax_free -= 1; }
            else if (msg.importTax == 'Taxable package') { data['taxes'][2].taxable -= 1; }
            else { data['taxes'][2].heavy_tax -= 1; }
        }
        else if (msg.destinationRegion == 'haifa') {

            if (msg.importTax == 'Tax Free') { data['taxes'][3].tax_free -= 1; }
            else if (msg.importTax == 'Taxable package') { data['taxes'][3].taxable -= 1; }
            else { data['taxes'][3].heavy_tax -= 1; }
        }
        else if (msg.destinationRegion == 'jerusalem') {

            if (msg.importTax == 'Tax Free') { data['taxes'][4].tax_free -= 1; }
            else if (msg.importTax == 'Taxable package') { data['taxes'][4].taxable -= 1; }
            else { data['taxes'][4].heavy_tax += 1; }
        }
        else if (msg.destinationRegion == 'dan') {
            if (msg.importTax == 'Tax Free') { data['taxes'][5].tax_free -= 1; }
            else if (msg.importTax == 'Taxable package') { data['taxes'][5].taxable -= 1; }
            else { data['taxes'][5].heavy_tax -= 1; }
        }
        else { console.log("taxes - data corupted " + msg.destinationRegion); }


    }
}





redisClient_mes.on('connect', function () {
    console.log('Receiver mes connected to Redis');
});


redisClient_mes.on("message", async function (channel, msg) {
    var msg = JSON.parse(msg);
    await setTotalSizes(msg, "0");
    await setPackageSizeDistribution(msg, "0");
    await setPackageTaxDistribution(msg, "0")
});


subscriber.on("message", function (channel, message) {
    console.log("Message: " + message + " on channel: " + channel + " is arrive!");

    var msg2 = JSON.parse(message);
    console.log(msg2.destinationRegion);
    setTotalSizes(msg2, "1");
    setPackageSizeDistribution(msg2, "1");
    setPackageTaxDistribution(msg2, "1")

});
subscriber.subscribe("notification");


server.listen(6061, function () {
    console.log('receiver is running on port 6061');
});

// ------ dashboard ----- //

app.listen(3000, () => {
    console.log(`Example app listening at http://localhost:3000}`)
})

app.set('view engine', 'ejs') // the engine 
app.use(express.static('public')) //who is our view engine



setInterval(async function () {
    var a = firebaseMain.firebaseMain()
}, 8000);


const fetch = require('node-fetch');
const { get } = require('http');



app.get('/analytics', (req, res) => {

    res.fetch()
})



// Rendering the dashboard as the defult page. localhost:3000
app.get('/', (req, res) => {
    // https://materializecss.com/icons.html <- icons
    res.render('pages/dashboard', data);

})




