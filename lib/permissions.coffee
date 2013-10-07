Permissions.registerHelper 'isUser', (userId) ->
  user =  Permissions.currentUser(userId)
  if user then return user.emails[0].verified
Permissions.registerHelper 'isAdmin', (userId) ->
  user = Permissions.currentUser(userId)
  if user then return user.admin
Permissions.registerHelper 'isOwner', (doc, userId) -> 
  user = Permissions.currentUser(userId)
  if user then doc.author == user.username
  

#client-side call
Permissions.setupHandlebars()
