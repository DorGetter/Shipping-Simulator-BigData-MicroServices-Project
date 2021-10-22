//------------------- imports ---------------------------//
// for explanations : https://www.sitepoint.com/using-redis-node-js/

var p_gen = require('./generators/package_generator');
var qr_gen = require('./generators/qrcode_generator');

var app = require('express')();
var server = require('http').Server(app);
var redis = require('redis');
const { Storage } = require('@google-cloud/storage');

var redisClient = redis.createClient();
let bucketName = "gs://bigdatafirebase-41ff7.appspot.com"
let filename = '';
let package = ""
var packages = []


// ------------------------ FireBase Sender ---------------- // 
// module.exports = function upload_firebase() {
const storage = new Storage({
    // Project Overview -> Project settings -> service account -> Generate new private key.
    keyFilename: "bigdatafirebase-41ff7-firebase-adminsdk-tikud-9c82d927e0.json",
});

// uploading to firebase bucket 
const uploadFile = async () => {
    console.log("uploading");
    // Uploads a local file to the bucket
    await storage.bucket(bucketName).upload(filename, {
        // gzip: true,
        metadata: {
            // contentType: 'image/JPEG',
            // cacheControl: 'public, max-age=31536000',
        },
    });
}










async function sendFirebase(pack, id) {
    
    await uploadFile();
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
function sendRedis(pack, trackingNum) {
    myobj = JSON.parse(pack);
    redisClient.publish("message", myobj, function () { });
    redisClient.set(trackingNum, pack, function (err, reply) { });
}

async function Arrived2Destination(package, id) {
    filename = id + ".png";
    await qr_gen.createqrCode(package, filename);

    setTimeout(function () {
        sendFirebase(package, id);
        console.log("package number: ", id, " arrived to destination. ")
    }, 3000)
}



// --------------------- Pages ------------------------- //

// get amount of packages and send to redis & fireBase
app.get('/package/:num', function (req, res) {
    res.send('package created Order saved in Redis cache and MongoDB on the cloud')
    let n_packages = req.params.num;
    for (let index = 1; index <= n_packages; index++) {
        //save new orders...
        setTimeout(function () {
            package = p_gen.createPackage()
            let trackingNum = package['trackingNumber']
            package = JSON.stringify(package)

            // packages.push(package)
            // package sent to redis -> package is on her way to the destination.
            sendRedis(package, trackingNum);
            console.log("package number: ", index, ", is pushed to DB")
            // package is arrived -> package qrcode is saved to the firebase. 
            // console.log("here : ", trackingNumber);

            Arrived2Destination(package, trackingNum).catch(error => console.error(error.stack));
            package = null;
        }, 6000 * index, index)
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