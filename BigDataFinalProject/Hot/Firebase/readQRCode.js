var Jimp = require("jimp");
var fs = require('fs')
var QrCode = require('qrcode-reader');
const path = require("path");


var f_Names = []

async function getFilesNames() {
    const fs = require('fs')

    const dir = fs.opendirSync('./SavedQRCodes')
    let dirent
    while ((dirent = dir.readSync()) !== null) {
        console.log(dirent.name)
        f_Names.push(dirent.name)
    }
    dir.closeSync()
    return "OK"
}




var packages = []

async function readQRCodes() {

    let ans = getFilesNames()
    console.log(ans);

    await Promise.all(f_Names.map(async (file) => {
        const img = await Jimp.read(fs.readFileSync(path.resolve(__dirname + '/SavedQRCodes/' + file)));
        const qr = new QrCode();

        // qrcode-reader's API doesn't support promises, so wrap it
        packages.push(await new Promise((resolve, reject) => {
            qr.callback = (err, v) => err != null ? reject(err) : resolve(v);
            qr.decode(img.bitmap);
        }));
    }))


    console.log(packages);
    let x = packages[0]
    console.log(x);
 
    return packages;

}

readQRCodes().catch(error => console.error(error.stack));
// readQRCodes()

module.exports.readQRCodes = readQRCodes;



