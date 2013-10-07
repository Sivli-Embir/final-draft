Package.describe({
  summary: "Meteor models that work with core meteor in a natural, meteor, way."
});
 
Package.on_use(function (api) {
  api.use([
    'coffeescript',
    'underscore'], 
    ['client','server'])
  
  api.add_files(['lib/NaturalModel.coffee'], ['client','server']);

  api.export('NaturalModel');
});

Package.on_test(function (api) {
  api.use([
    'natural-model',
    'tinytest'
  ])
  api.add_files(['test/test.js'], ['client', 'server']);
})
