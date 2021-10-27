var express = require('express');
var app = require('express')();
var server = require('http').Server(app);
var redis = require('redis');
var redisClient = redis.createClient();
var mongSender = require('./Mongo/send2Mongo');
var subscriber = redis.createClient();




var pullfromMongo = require('./bigml2/dataset_mongo.js');
const { json } = require('express');
const { endianness } = require('os');

app.set('view engine', 'ejs') // the engine 
app.use(express.static('public')) //who is our view engine
redisClient.subscribe('message');

redisClient.on("message", function (channel, data) {
    var data = JSON.parse(data);
    mongSender.mongoSender(data);
});


redisClient.on('connect', function () {
    console.log('Receiver connected to Redis');
});

server.listen(6062, function () {
    console.log('Receiver is running on port 6061');
});

// ------ dash board ----- //

app.listen(3001, () => {
    console.log(`Example app listening at http://localhost:3001}`)
})



var table = []



subscriber.on("message", function (channel, message) {
    // table.push(JSON.parse(message))  
    var j = JSON.parse(message)
    table.push(j)
    table = table[0]
});
subscriber.subscribe("table");


function createNewview() {

    pullfromMongo.pullfromMongo()

}



app.get('/refreshT', (req, res) =>{
    // console.log("asdas");
    async function ss() {
        await createNewview(res);
        res.redirect('/')       
    }
    ss()
    // Rendering the dashboard as the defult page. localhost:3000
});


// Rendering the dashboard as the defult page. localhost:3000
app.get('/', (req, res) => {
    // https://materializecss.com/icons.html <- icons
    res.render('pages/dashboard', { table })
})

