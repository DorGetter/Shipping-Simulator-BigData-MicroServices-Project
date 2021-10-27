var bigml = require('bigml');
var fs = require('fs');


var getTable = require('./associationTable');


var connection = new bigml.BigML('bigdatacourse2021', 'ad08ca86c30c5a51417e95ea2dd5e12ab6d461c7')
var source = new bigml.Source(connection);

function create_n_model() {
  console.log('function two');

  source.create('./bigml2/Associations.csv', function (error, sourceInfo) {
    if (!error && sourceInfo) {
      var dataset = new bigml.Dataset(connection);
      dataset.create(sourceInfo, function (error, datasetInfo) {
        if (!error && datasetInfo) {
          var model = new bigml.Association(connection);
          model.create(datasetInfo, function (error, modelInfo) {
            if (!error && modelInfo) {
              // console.log(modelInfo)

              var model = new bigml.Model(connection);
              model.get(modelInfo.resource,
                true,
                'only_model=true;limit=-1',
                function (error, resource) {
                  if (!error && resource) {
                    // fs.writeFileSync('./bigml2/dataset.json', JSON.stringify(resource));
                    console.log('datajson done!');
                    getTable.getTable();
                  }
                })
            }
          });
        }
      });
    }
  });
}

module.exports.create_n_model = create_n_model;

