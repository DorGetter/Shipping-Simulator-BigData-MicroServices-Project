//------------------- imports ---------------------------//
// for explanations : https://www.sitepoint.com/using-redis-node-js/
// get all files from the FireBase and save them localy

const { Storage } = require('@google-cloud/storage');
var fs = require('fs');
var QrCode = require('qrcode-reader');
const { log } = require("console");
var qr = new QrCode();



var app = require('express')();
var redis = require('redis');
var redisClient = redis.createClient();
var publisher = redis.createClient();


var ttl = 1000



let bucketName = "gs://bigdatafirebase-41ff7.appspot.com"
const storage = new Storage({
    // Project Overview -> Project settings -> service account -> Generate new private key.
    keyFilename: "./Firebase/bigdatafirebase-41ff7-firebase-adminsdk-tikud-9c82d927e0.json",
    // keyFilename: "bigdatafirebase-41ff7-firebase-adminsdk-tikud-9c82d927e0.json",

});

const bucket = storage.bucket(bucketName);
const dir = './SavedQRCodes/';


process.on("exit", function () {
    redisClient.quit();
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

redisClient.on('connect', function () {
    console.log('Sender connected to Redis');
});



async function publish(key) {
    console.log("publish");
    var val_out;
    await redisClient.get(key, (err, val) => {
        if (err) { console.error(err); return }
        // publisher.publish("notification", JSON.stringify(val), function () {
        publisher.publish("notification", val, function () {

        });
    })
}



async function deleteFromRedis(key) {
    console.log("delete" , key);
    redisClient.del(key, function (err, reply) {
        console.log(reply);
    });
};



redisIntervalId = setInterval(closeRedis, ttl);
// close redis client connection if it's the last required process
function closeRedis() {
    // 2 core processes plus Redis and interval
    var minimumProcesses = 4;
    if (process._getActiveHandles().length > minimumProcesses)
        return;

    clearInterval(redisIntervalId);
    redisClient.unref();
}


var f = [];

async function firebaseMain() {
    console.log("Firebase runner -> getting packages on arrival. called");
    var ttl = await bucket.getFiles().length;
    ttl = ttl * 20
    const [files] = await bucket.getFiles()
    files.map(async (file) => {
        let filename = file.name
        console.log(typeof filename);
        // console.log("map main func called");

        if (filename != undefined || filename != null) {

            let options = { destination: dir + filename, };
            try {
                await bucket.file(filename).download(options);
            } catch (error) { console.error(error); }


            var key = filename.replace('.png', '');

            await publish(key)

            await deleteFromRedis(key)

            await bucket.file(filename).delete();
        }
    });
    closeRedis();
    return "returning"
}

// firebaseMain().catch(error => console.error(error.stack));
module.exports.firebaseMain = firebaseMain;