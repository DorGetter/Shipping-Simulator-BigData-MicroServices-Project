//------------------- imports ---------------------------//
// for explanations : https://www.sitepoint.com/using-redis-node-js/


const { Storage } = require('@google-cloud/storage');
var fs = require('fs');
var QrCode = require('qrcode-reader');
var qr = new QrCode();


let bucketName = "gs://bigdatafirebase-41ff7.appspot.com"
const storage = new Storage({
    // Project Overview -> Project settings -> service account -> Generate new private key.
    keyFilename: "bigdatafirebase-41ff7-firebase-adminsdk-tikud-9c82d927e0.json",
});
const bucket = storage.bucket(bucketName);




async function send() {
    const files = await storage.bucket(bucketName).getFiles('*')
    files[0].forEach((file) => {
        file.download({ destination: __dirname  + file.name })
        console.log(`saved to ${file.name}`)
    })
}

send()





// var Jimp = require("jimp");
// var buffer = fs.readFileSync(__dirname + '/test.png');
// Jimp.read(buffer, function(err, image) {
//     if (err) {
//         console.error(err);
//         // TODO handle error
//     }
//     var qr = new QrCode();
//     qr.callback = function(err, value) {
//         if (err) {
//             console.error(err);
//             // TODO handle error
//         }
//         console.log(value.result);
//         console.log(value);
//     };
//     qr.decode(image.bitmap);
// });