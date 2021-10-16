
// Code format: shift + alt + F

var bigml = require('bigml');

const { render } = require('ejs');
const { createPackage } = require('../Simulator/generators/package_generator');

var connection = new bigml.BigML('BigDataCourse2021',
    'ad08ca86c30c5a51417e95ea2dd5e12ab6d461c7')

var source = new bigml.Source(connection); // SOURCE
var flag = false;
var fieldsToAdd = [];

// module.exports; BIGML_USERNAME = 'BIGDATACOURSE2021'
// module.exports; BIGML_API_KEY = 'ad08ca86c30c5a51417e95ea2dd5e12ab6d461c7'

// BIGML_USERNAME = BIGDATACOURSE2021
// module.exports;{ BIGML_USERNAME };

// BIGML_API_KEY = ad08ca86c30c5a51417e95ea2dd5e12ab6d461c7
// module.exports;{ BIGML_API_KEY };

// import { BIGML_USERNAME } from './otherFileName' // From where?
// import { BIGML_API_KEY } from './otherFileName' // From where?


// The steps required to generate a prediction are creating a set of source,
// dataset and model objects:

// source.create('./iris.csv', function (error, sourceInfo) { // using our csv file as a source
//     if (!error && sourceInfo) {
//         var dataset = new bigml.Dataset(connection); // DATASET
//         dataset.create(sourceInfo, function (error, datasetInfo) {
//             if (!error && datasetInfo) {
//                 var model = new bigml.Model(connection); // MODEL
//                 model.create(datasetInfo, function (error, modelInfo) {
//                     if (!error && modelInfo) {
//                         var prediction = new bigml.Prediction(connection); // PREDICTION
//                         prediction.create(modelInfo, { 'petal length': 1 }) // add prediction
//                         const localmodel = new bigml.LocalModel(prediction.resource, connection); // LOCAL MODEL
//                         localmodel.predict({ 'petal length': 1 }, function (error, prediction) { // add prediction
//                             console.log(prediction.prediction);
//                         })
//                     }
//                 });
//             }
//         });
//     }
// });

//=================== Get package's data and insert into the queue =================
// module.exports.bigmlprediction = (data) => {
//     let package = JSON.parse(data);
//     fieldsToAdd.push(package);
//     if (flag === false) { // checks if single package prediction is done and then another one
//         flag = true;
//         predictonepackage(fieldsToAdd.shift());
//     }
// }

//================= Prediction of a single package ====================
// function predictonepackage() {

//     const localModel = new bigml.LocalModel('model/6154d9c899dfe7073f008ef6', connection);
//     //5.1,3.5,1.4,0.2,Iris-setosa
//     localModel.predict(
//         {
//             "sepal length": 5.1,
//             "sepal width": 3.5,
//             "petal length": 1.4,
//             "petal width": 0.6,
//             "species": "Iris-setosa"
//         },
//         function (error, prediction) {
//             console.log(prediction)
//             console.log(prediction.probability)
//         });
//     flag = false;
// }

// predictonepackage()

// //=============== Send a matrix to bigML page =================
// exports.showMatrix = (req, res, error) => {
//     var accurency = (counter / denominator);
//     res.render('./pages/dashboard', { mat: { mat_bigMl, accurency } });
// }

// // The generated objects can be retrieved, updated and deleted through
// // the corresponding REST methods.
// source.get('source/51b25fb237203f4410000010', function (error, resource) {
//     if (!error && resource) {
//         console.log(resource);
//     }
// })

// // You can also generate local predictions using the information of your models
// var localModel = new bigml.LocalModel('model/51922d0b37203f2a8c000010');
// localModel.predict({ 'petal length': 1 },
//     function (error, prediction) { console.log(prediction) });

// // And similarly, for your ensembles
// // will generate a prediction by combining the predictions of each of the models they enclose.
// var localEnsemble = new bigml.LocalEnsemble('ensemble/51901f4337203f3a9a000215');
// localEnsemble.predict({ 'petal length': 1 }, 0,
//     function (error, prediction) { console.log(prediction) });

// *********** 13/10/2021: ***********
// // get keys as array

// let data = createPackage()

// const keys = Object.keys(data[0]);

// const commaSeparatedString = [keys.join(","), data.map(row => keys.map(key => row[key]).join(",")).join("\n")].join("\n")``

// const csvBlob = new Blob([commaSeparatedString])
// const url = URL.createObjectURL(csvBlob)



function getpridiction() {

    var bigml = require('bigml');
    // Downloads and generates a local version of the ASSOCIATION.
    var association = new bigml.LocalAssociation(
        'association/615602679193b9173400aafb', new bigml.BigML("bigdatacourse2021", "ad08ca86c30c5a51417e95ea2dd5e12ab6d461c7", { "domain": "bigml.io" }));
    // To predict predict association sets fill the desired inputData
    // inputData: input values' object.
    var inputData = {
        "field1": "burgers"
    }

    association.associationSet(inputData, function (error, data) {
        console.log(Object.keys(data).length)
    });
}
getpridiction()