const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://dbUser:123@cluster0.l7iam.mongodb.net/studentdB?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });



function send2Mong(pack) {
  MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("data");
    dbo.collection("packages").insertOne(pack, function (err, res) {
      if (err) throw err;
      console.log("1 document inserted to mongo");
      db.close();
    });
  });
}


module.exports = {
  mongoSender: send2Mong
};




