var fs = require('fs');
var qrcode_read = require('./readQRCode')

let myobj = qrcode_read('order0.png');
console.log(myobj)
