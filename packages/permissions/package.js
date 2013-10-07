Package.describe({
  summary: "A pattern for name spaced permissions. Use on the server, client, and with handlebars."
});
 
Package.on_use(function (api) {
  api.use([
    'coffeescript',
    'handlebars'], 
    ['client','server'])
  
  api.add_files(['permissions.coffee'], ['client','server']);

  api.export('Permissions');
});
