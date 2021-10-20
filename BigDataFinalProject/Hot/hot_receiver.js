var express = require('express');
var app = require('express')();
var server = require('http').Server(app);
var redis = require('redis');
var redisClient = redis.createClient();
var DownloadFireBase = require('./Firebase/fireBaseAssit')

redisClient.subscribe('message');


var data = {
    cards: [
        { title: "North", value: 0, unit: "Packages", fotterIcon: "", fotterText: "AVG Capacity", icon: "arrow_back" },
        { title: "Center", value: 1, unit: "Packages", fotterIcon: "", fotterText: "AVG Capacity", icon: "addiccall" },
        { title: "South", value: 2, unit: "Packages", fotterIcon: "", fotterText: "AVG Capacity", icon: "adb" },
        { title: "Haifa", value: 3, unit: "Packages", fotterIcon: "", fotterText: "AVG Capacity", icon: "adb" },
        { title: "Jerusalem", value: 4, unit: "Packages", fotterIcon: "", fotterText: "AVG Capacity", icon: "adb" },
        { title: "Dan", value: 5, unit: "Packages", fotterIcon: "", fotterText: "AVG Capacity", icon: "adb" }
    ],



    sizes: [
        { title: 'center', small: 12, medium: 4, large: 23 },
        { title: 'north', small: 20, medium: 10, large: 40 },
        { title: 'south', small: 30, medium: 10, large: 120 },
        { title: 'haifa', small: 4, medium: 53, large: 676 },
        { title: 'jerusalem', small: 58, medium: 235, large: 1 },
        { title: 'dan', small: 245, medium: 987, large: 3890 }
    ]
}



function setTotalSizes(msg) {
    if (msg.destinationRegion == 'north') {
        data.cards[0].value += 1
    }
    else if (msg.destinationRegion == 'center') {
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
    else { data.cards[5].value += 1 }
}


function setPackageSizeDistribution(msg) {

    if (msg.destinationRegion == 'center') {
        if (msg.size == 'S') { data.sizes_center[0].value += 1; }
        else if (msg.size == 'M') { data.sizes_center[1].value += 1; }
        else { data.sizes_center[2].value += 1; }
    }
    else if (msg.destinationRegion == 'north') {

        if (msg.size == 'S') { data.sizes_north[0].value += 1; }
        else if (msg.size == 'M') { data.sizes_north[1].value += 1; }
        else { data.sizes_north[2].value += 1; }
    }
    else if (msg.destinationRegion == 'south') {

        if (msg.size == 'S') { data.sizes_south[0].value += 1; }
        else if (msg.size == 'M') { data.sizes_south[1].value += 1; }
        else { data.sizes_south[2].value += 1; }
    }
    else if (msg.destinationRegion == 'haifa') {

        if (msg.size == 'S') { data.sizes_haifa[0].value += 1; }
        else if (msg.size == 'M') { data.sizes_haifa[1].value += 1; }
        else { data.sizes_haifa[2].value += 1; }
    }
    else if (msg.destinationRegion == 'jerusalem') {

        if (msg.size == 'S') { data.sizes_jerusalem[0].value += 1; }
        else if (msg.size == 'M') { data.sizes_jerusalem[1].value += 1; }
        else { data.sizes_jerusalem[2].value += 1; }
    }
    else {
        if (msg.size == 'S') { data.sizes_dan[0].value += 1; }
        else if (msg.size == 'M') { data.sizes_dan[1].value += 1; }
        else { data.sizes_dan[2].value += 1; }
    }
}


redisClient.on("message", function (channel, msg) {
    var msg = JSON.parse(msg);
    setTotalSizes(msg);
    setPackageSizeDistribution(msg);
    console.log(msg)
});





redisClient.on('connect', function () {
    console.log('Receiver connected to Redis');
});

server.listen(6061, function () {
    console.log('receiver is running on port 6061');
});

// ------ dash board ----- //

app.listen(3000, () => {
    console.log(`Example app listening at http://localhost:3000}`)
})

app.set('view engine', 'ejs') // the engine 
app.use(express.static('public')) //who is our view engine




function check_arrivals(){
    setTimeout(function () {
        DownloadFireBase.firebaseMain()

        // download from firebase 
        // get all packages info. 
        // add the data from packages to dashboard (add fields to 'data')
        // delete from firebase 
        // delete from redis

    }, 50000)
}

// Rendering the dashboard as the defult page. localhost:3000
app.get('/', (req, res) => {
    check_arrivals()
    // https://materializecss.com/icons.html <- icons
    res.render('pages/dashboard', data);

})
