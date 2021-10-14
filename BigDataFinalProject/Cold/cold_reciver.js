var express = require('express');
var app = require('express')();
var server = require('http').Server(app);
var redis = require('redis');
var redisClient = redis.createClient();
var mongSender = require('./Mongo/send2Mongo');


redisClient.subscribe('message'); 


redisClient.on("message", function (channel, data) {
    var data = JSON.parse(data);
    mongSender.mongoSender(data);
});

redisClient.on('connect', function() {
    console.log('Reciver connected to Redis');
});

server.listen(6061, function() {
    console.log('reciver is running on port 6061');
});




// ------ dash board ----- //

app.listen(3000, () => {
    console.log(`Example app listening at http://localhost:3000}`)
})
  


app.set('view engine', 'ejs') // the engine 
app.use(express.static('public')) //who is our view engine

// Rendering the dashboard as the defult page. localhost:3000
app.get('/', (req, res) => {


    // https://materializecss.com/icons.html <- icons
    var data = {
      cards : [
      {title:"North", value:23, unit:"packages", fotterIcon:"", fotterText:"avg capacity", icon: "shopping_cart"},
      {title:"Dan", value:45, unit:"packages", fotterIcon:"", fotterText:"avg capacity", icon: "delete"},
      {title:"South", value:400, unit:"packages", fotterIcon:"", fotterText:"avg capacity", icon: "adb"},
      {title:"Center", value:200, unit:"packages", fotterIcon:"", fotterText:"avg capacity", icon: "addiccall"}
    ]}
    res.render('pages/dashboard', data)
  })