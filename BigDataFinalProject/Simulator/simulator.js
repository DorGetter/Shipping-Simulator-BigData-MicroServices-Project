//------------------- imports ---------------------------//
// for explanations : https://www.sitepoint.com/using-redis-node-js/


var p_gen = require('./generators/package_generator');
var qr_gen = require('./generators/qrcode_generator');

var app = require('express')();
var server = require('http').Server(app);
var redis = require('redis');
const {Storage} = require('@google-cloud/storage');

var redisClient = redis.createClient();
let bucketName = "gs://bigdatafirebase-41ff7.appspot.com"
let filename = '';
let package = ""
var packages = []


// ------------------------ FireBase Sender ---------------- // 

const storage = new Storage({
    // Project Overview -> Project settings -> service account -> Generate new private key.
    keyFilename: "bigdatafirebase-41ff7-firebase-adminsdk-tikud-9c82d927e0.json",
});

// uploading to firebase bucket 
const uploadFile = async() => {

    // Uploads a local file to the bucket
    await storage.bucket(bucketName).upload(filename, {
        gzip: true,
        metadata: {
        },});
}

function sendMongo(pack, index){
    filename = "order"+index+".png"
    qr_gen.createqrCode(pack, filename);
    uploadFile();
    console.log(`${filename} uploaded to ${bucketName}.`);
}




// ------------------------ Redis Sender ---------------- // 


redisClient.on('connect', function () {
    console.log('Sender connected to Redis');
});

server.listen(6062, function () {
    console.log('Sender is running on port 6062');
});

// save packages to redis db cash 
function sendRedis(pack){ 
    redisClient.publish("message", pack, function () {});  
    redisClient.RPUSH('packages', pack, function (err, reply) {});
}



function Arrived2Destination(package, index){
    setTimeout(function () {
        sendMongo(package, index);
        console.log("package number: " , index, " arrived to destination. ")
    }, 90000)
}



// --------------------- Pages ------------------------- //

// get amount of packages and send to redis & fireBase
app.get('/package/:num', function (req, res) {


    res.send('package created Order saved in redis cash and mongoDB on the cloud')
    let n_packages = req.params.num
    for (let index = 0; index < n_packages; index++) {
       
       //save new orders.. 
        setTimeout(function () {
            package = p_gen.createPackage()
            packages.push(package)
            // package sent to redis -> package is on her way to the destination.
            sendRedis(package);

            // sendMongo(package, index);

            console.log("package number: ", index , ", is pushed to db")
            // package is arrived -> package qrcode is saved to the firebase. 
            Arrived2Destination(package, index)
            package = null;

        }, 6000*index, index)      
    }


});

// default dropping page 
app.get('/', function (req, res) {
    console.log("home")
    res.send("home")
})


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});