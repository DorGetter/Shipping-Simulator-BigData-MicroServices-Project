//------------------- imports ---------------------------//
// for explanations : https://www.sitepoint.com/using-redis-node-js/

// get all files from the FireBase and save them localy


const { Storage } = require('@google-cloud/storage');
var fs = require('fs');
var QrCode = require('qrcode-reader');
// var read_QRCode = require('./testing.js')
var delete_Redis = require("./Redis/deleteFromRedis");
var qr = new QrCode();

let bucketName = "gs://bigdatafirebase-41ff7.appspot.com"
const storage = new Storage({
    // Project Overview -> Project settings -> service account -> Generate new private key.
    keyFilename: "bigdatafirebase-41ff7-firebase-adminsdk-tikud-9c82d927e0.json",
});

const bucket = storage.bucket(bucketName);
const dir = './SavedQRCodes/';


async function firebaseMain() {
    try {
        fs.mkdir(dir, function (err) {
            if (err) { console.log(err) }
        });

        const [files] = await bucket.getFiles();
        await Promise.all(files.map(async (file) => {
            let filename = file.name
            let options = { destination: dir + filename, };
            await bucket.file(filename).download(options);
            var key = filename.replace('.png', '');
            // console.log("pack Assist: " , pack);
            await delete_Redis(key);
            await bucket.file(filename).delete();
        }))
    } catch (err) {
    }
}

firebaseMain().catch(error => console.error(error.stack));

module.exports.firebaseMain = firebaseMain;

