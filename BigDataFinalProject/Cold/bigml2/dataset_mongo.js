const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://dbUser:123@cluster0.l7iam.mongodb.net/studentdB?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


var create_n_model = require('./create_newModel.js');


const mongodb = require("mongodb").MongoClient;
const fs = require("fs");

let url = "mongodb+srv://dbUser:123@cluster0.l7iam.mongodb.net/studentdB?retryWrites=true&w=majority";
var f = []
var m = []


function pullfromMongo() {


  console.log('function one');

   mongodb.connect(
    url,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err, client) => {
      if (err) throw err;

      client
        .db("data")
        .collection("packages")
        .find({})
        .toArray((err, data) => {
          if (err) throw err;

          data.forEach(havila => {
            havila['items'].forEach(name_ => {
              m.push(name_['type'])
            })
            f.push(m)
            m = []
          });


          var lineArray = []
          f.forEach(function (f, index) {
            var line = f.join(",");
            lineArray.push(line);
          });
          var csvContent = lineArray.join("\n");

          fs.writeFile('./bigml2/Associations.csv', csvContent, 'utf8', function (err) {
            if (err) {
              console.log('Some error occured - file either not saved or corrupted file saved.');
            } else {
              console.log('It\'s saved!');
              create_n_model.create_n_model();

            }
          });

          client.close();
          // console.log('It\'s saved!');
        });
    }
  );



    // console.log("end mon");


}



module.exports.pullfromMongo = pullfromMongo;


// pullfromMongo()