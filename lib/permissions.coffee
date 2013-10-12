Permissions.registerHelper 'isUser', (userId) ->
  if Permissions.currentUserId(userId) then true else false
Permissions.registerHelper 'isAdmin', (userId) ->
  user = Permissions.currentUser(userId)
  if user then return user.admin
Permissions.registerHelper 'isOwner', (doc, userId) -> 
  user = Permissions.currentUser(userId)
  if user then doc.authorId == user._id
  

#client-side call
Permissions.setupHandlebars()
