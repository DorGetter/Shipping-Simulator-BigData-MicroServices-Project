var express = require('express');
var app = require('express')();
var server = require('http').Server(app);
var redis = require('redis');
var redisClient = redis.createClient();
var mongSender = require('./Mongo/send2Mongo');
var getprediction = require('./BigML/model2');


app.set('view engine', 'ejs') // the engine 
app.use(express.static('public')) //who is our view engine
redisClient.subscribe('message'); 



// var data = {
//     table: [
//         { title: "North", value: 0, unit: "Packages", fotterIcon: "", fotterText: "AVG Capacity", icon: "arrow_back" },
//         { title: "Center", value: 1, unit: "Packages", fotterIcon: "", fotterText: "AVG Capacity", icon: "addiccall" },
//         { title: "South", value: 2, unit: "Packages", fotterIcon: "", fotterText: "AVG Capacity", icon: "adb" },
//         { title: "Haifa", value: 3, unit: "Packages", fotterIcon: "", fotterText: "AVG Capacity", icon: "adb" },
//         { title: "Jerusalem", value: 4, unit: "Packages", fotterIcon: "", fotterText: "AVG Capacity", icon: "adb" },
//         { title: "Dan", value: 5, unit: "Packages", fotterIcon: "", fotterText: "AVG Capacity", icon: "adb" }
//     ]
// }



redisClient.on("message", function (channel, data) {
    var data = JSON.parse(data);
    mongSender.mongoSender(data);

    console.log(data)
});


redisClient.on('connect', function() {
    console.log('Receiver connected to Redis');
});

server.listen(6061, function() {
    console.log('Receiver is running on port 6061');
});

// ------ dash board ----- //

app.listen(3000, () => {
    console.log(`Example app listening at http://localhost:3000}`)
})
  



// Rendering the dashboard as the defult page. localhost:3000
app.get('/', (req, res) => {

    // https://materializecss.com/icons.html <- icons
    res.render('pages/dashboard')
  })