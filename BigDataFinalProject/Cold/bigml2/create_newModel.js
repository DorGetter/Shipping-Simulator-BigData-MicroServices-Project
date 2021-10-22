var bigml = require('bigml');
var fs = require('fs');
var connection = new bigml.BigML('bigdatacourse2021', 'ad08ca86c30c5a51417e95ea2dd5e12ab6d461c7')
var source = new bigml.Source(connection);


source.create('Associations.csv', function (error, sourceInfo) {
  if (!error && sourceInfo) {
    var dataset = new bigml.Dataset(connection);
    dataset.create(sourceInfo, function (error, datasetInfo) {
      if (!error && datasetInfo) {
        var model = new bigml.Association(connection);
        model.create(datasetInfo, function (error, modelInfo) {
          if (!error && modelInfo) {
            console.log(modelInfo)

            var model = new bigml.Model(connection);
            model.get(modelInfo.resource,
              true,
              'only_model=true;limit=-1',
              function (error, resource) {
                if (!error && resource) {
                  fs.writeFileSync('../bigml2/dataset.json', JSON.stringify(resource));
                  console.log(JSON.stringify(resource, null, "  "));
                }
              })
          }
        });
      }
    });
  }
});