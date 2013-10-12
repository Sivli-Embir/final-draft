#Core object
Permissions = {}

#handlebars style syntax for setting up helpers
Permissions.registerHelper = (name, func) ->
  Permissions[name] = func

Permissions.currentUserId = (userId) -> 
  if userId then return userId else try return Meteor.userId()

Permissions.currentUser = (userId) ->
  try return Meteor.user() catch then return Meteor.users.findOne(userId)

Permissions.setupHandlebars = ->
  #setup the helpers with a closure that calls the permissions functions -- duplicates code in memory, unfortunate but needed given JS function logic
  if Meteor.isClient then for key of Permissions then do (key) -> 
    unless key in ['setupHandlebars', 'registerHelper', 'Permissions', 'currentUser', 'currentUserId'] then Handlebars.registerHelper key, -> Permissions[key](this)

if Meteor.isClient then Handlebars.registerHelper 'Permissions', (key) -> Permissions[key]
