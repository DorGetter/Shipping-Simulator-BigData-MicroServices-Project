var p_gen = require('./generators/package_generator');
var qr_gen = require('./generators/qrcode_generator');
var express = require('express');
var app = require('express')();
var server = require('http').Server(app);
var redis = require('redis');
const { Storage } = require('@google-cloud/storage');

var redisClient = redis.createClient();
let bucketName = "gs://bigdatafirebase-41ff7.appspot.com";
let filename = '';
let package = "";
var packages = [];
var packages_JSON = [];

app.use(express.static('public'))
app.set('view engine', 'ejs')



// ------------------------ FireBase Sender ---------------- // 
// module.exports = function upload_firebase() {
const storage = new Storage({
  // Project Overview -> Project settings -> service account -> Generate new private key.
  keyFilename: "bigdatafirebase-41ff7-firebase-adminsdk-tikud-9c82d927e0.json",
});

// uploading to firebase bucket 
const uploadFile = async () => {
  console.log("uploading...");
  // Uploads a local file to the bucket
  await storage.bucket(bucketName).upload(filename, {
    metadata: {},
    destination: filename
  }, (err, file) => {

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

server.listen(6060, function () {
  console.log('Sender is running on port 6060');
});

//Saves packages to Redis' database cache 
function sendRedis(pack, trackingNum) {
  redisClient.publish("message", pack, function () { });
  redisClient.set(trackingNum, pack, function (err, reply) { });
}

// Generates a QRCode and send it over to Firebase cloud
async function Arrived2Destination(package, id) {
  filename = id + ".png";
  await qr_gen.createqrCode(package, filename);
  sendFirebase(package, id);
  console.log("package number: ", id, " arrived to destination. ")
}


app.get('/packages', function (req, res) {
  res.render('pages/sim_dashboard')
  let t = req.query
  let n_packages = t['packages']
  var file_name = '';
  for (let index = 1; index <= n_packages; index++) {
    //Save new orders...
    setTimeout(function () {
      package = p_gen.createPackage();
      let trackingNum = package['trackingNumber'];
      package = JSON.stringify(package);
      file_name = trackingNum + '.png';
      packages.push(file_name);       // packages = [all file names]
      packages_JSON.push(package);    // packages_JSON = [all packages' data]


      // Package sent to Redis => package is on it's way to destination.
      sendRedis(package, trackingNum);
      console.log("Package number: ", index, ", is pushed to DB");
      package = null;
    }, 2000 * index, index)     //The time you wish to wait before the package will present in the Redis cache
  }

  for (let index = 1; index <= n_packages; index++) {
    setTimeout(function () {
      id = packages[index - 1].replace('.png', '');
      curr_pack = packages_JSON[index - 1];
      // Package has arrived => package's QRcode is saved into Firebase storage 
      console.log("here : ", id);
      Arrived2Destination(curr_pack, id).catch(error => console.error(error.stack));
    }, 25000 * index, index)       //The time you wish to wait before the package will get uploaded into Firebase storage
  }
});




  app.get('/', (req, res) => {
    res.render("pages/sim_dashboard")
  })

