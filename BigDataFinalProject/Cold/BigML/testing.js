var getprediction = require('./model2');




var predicts = "Screen, Laptop, Sunglasses"
const func = async()=> 
 { 
     const callback = (ans)=>{
        console.log(ans);
     }
     getprediction.get_prediction(predicts, callback)
}

func()