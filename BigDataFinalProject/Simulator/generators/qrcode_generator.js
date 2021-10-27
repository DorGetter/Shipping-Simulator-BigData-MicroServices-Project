const QRCode = require('qrcode')

// saves the image Qrcode Img
const saveQrcodelocal = (string, filename) => {

    QRCode.toFile(
        filename,
        string,
        {
             })
             console.log("1 saveQrcode");
}

async function generate_pack_qrcodeImg(package, filename){
    await saveQrcodelocal(package, filename);
    console.log("2 return saveQrcode");
    return "all ok"; 

}

module.exports = {
    createqrCode: generate_pack_qrcodeImg
 };



