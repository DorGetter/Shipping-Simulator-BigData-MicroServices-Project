var getprediction = require('./model2');




var predicts = "Screen, Laptop, Sunglasses"
var ans = getprediction.get_prediction(predicts)
if (ans != undefined){

    console.log(ans[0], " --> ", ans[1], "   ", ans[2])

}
