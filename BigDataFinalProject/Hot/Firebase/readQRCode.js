var Jimp = require("jimp");
var fs = require('fs')
var QrCode = require('qrcode-reader');
 
async function readQRCodes() {
    // try {
        const img = await Jimp.read(fs.readFileSync('./order3.png'));
        const qr = new QrCode();

        // qrcode-reader's API doesn't support promises, so wrap it
        const value = await new Promise((resolve, reject) => {
            qr.callback = (err, v) => err != null ? reject(err) : resolve(v);
            qr.decode(img.bitmap);
        });

        console.log(value);
        console.log(value.result);
        return value.result;

    // } catch (error) {
    //      console.error(`Error while trying to read the QRCode.`);
    // }
}

readQRCodes().catch(error => console.error(error.stack));
// readQRCodes()

module.exports.readQRCodes = readQRCodes;