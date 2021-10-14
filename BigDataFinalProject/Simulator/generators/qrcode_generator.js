const QRCode = require('qrcode')

// saves the image Qrcode Img
const saveQrcodelocal = (string, filename) => {

    QRCode.toFile(
        filename,
        string,
        {
            width: 300,
            height: 300
        })
}

function generate_pack_qrcodeImg(package, filename){
    saveQrcodelocal(package, filename);
    return "all ok"; 
}

module.exports = {
    createqrCode: generate_pack_qrcodeImg
 };



