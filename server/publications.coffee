Meteor.publish "posts", -> 
  if Permissions.isUser(this.userId)
    Posts.find({},{fields: {description: 0}})
  else
    Posts.find({public:true},{fields: {description: 0}})

Meteor.publish "post", (id) -> 
  if Permissions.isUser(this.userId)
    Posts.find(id)
  else
    Posts.find({_id: id, public:true})

Meteor.publish "admin", () -> 
  if Permissions.isUser(this.userId) then Meteor.users.find(this.userId, {fields: admin: 1})

Meteor.publish 'members', () ->
  if Permissions.isAdmin(this.userId) then Meteor.users.find({})
