//------------------- imports ---------------------------//
// for explanations : https://www.sitepoint.com/using-redis-node-js/




// get all files from the FireBase and save them localy


const { Storage } = require('@google-cloud/storage');
var fs = require('fs');
var QrCode = require('qrcode-reader');
// var read_QRCode = require('./readQRCode.js')
// var delete_Redis = require("../Redis/deleteFromRedis.js");
var qr = new QrCode();


let bucketName = "gs://bigdatafirebase-41ff7.appspot.com"
const storage = new Storage({
    // Project Overview -> Project settings -> service account -> Generate new private key.
    keyFilename: "bigdatafirebase-41ff7-firebase-adminsdk-tikud-9c82d927e0.json",
});

const bucket = storage.bucket(bucketName);
const dir = './';



const firebaseMain = async () => {
    try {
        fs.rmdirSync(dir, { recursive: true });
    }
    catch (err) {
        console.error(`Error while trying to delete: ${dir}.`);
    }
    fs.mkdir(dir, function (err) {
        if (err) { console.log(err) }
    });

    const [files] = await bucket.getFiles();
    files.forEach(file => {
        // let filename = file.name;
        // let dest = dir + filename;
        let options = { destination: dir + file.name, };
        bucket.file(file.name).download(options);
        // let key = read_QRCode.readQRCodes(filename).tracking_number;
        // delete_Redis(key);
        bucket.file(file.name).delete();

    })
}

firebaseMain().catch(error => console.error(error.stack));

module.exports = {
    firebaseMain: firebaseMain
};















