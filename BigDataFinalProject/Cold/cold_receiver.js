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






redisClient.on("message", function (channel, data) {
    var data = JSON.parse(data);
    mongSender.mongoSender(data);

    console.log(data)
});



// {
//     trackingNumber: 21433123,
//     items: [
//       { description: 'Usb Cable', cost: 6, size: 'S' },
//       { type: 'Jar', cost: 15, size: 'S' },
//       { description: 'Bottle', cost: 8, size: 'S' },
//       { type: 'Towel', cost: 15, size: 'S' },
//       { type: 'Cup', cost: 6, size: 'S' },
//       { type: 'Shampoo', cost: 15, size: 'S' },
//       { type: 'Notebook', cost: 15, size: 'S' },
//       { type: 'Deodorant', cost: 15, size: 'S' },
//       { description: 'Doll', cost: 15, size: 'S' },
//       { type: 'Pants', cost: 15, size: 'S' },
//       { type: 'Watch', cost: 15, size: 'S' },
//       { type: 'Underwear', cost: 15, size: 'S' },
//       { type: 'Electric Drill', cost: 15, size: 'S' },
//       { type: 'Calculator', cost: 15, size: 'S' },
//       { description: 'HeadPhones', cost: 12, size: 'S' }
//     ],
//     size: 'M',
//     orderCost: 197,
//     importTax: 'Taxable package',
//     adrass: 'Tel Hai 111 Beer Sheva',
//     destinationRegion: 'south'
//   }





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