Meteor.publish "posts", -> 
  if Permissions.isUser(this.userId)
    Posts.find({},{fields: {description: 0}})
  else
    Posts.find({public:true},{fields: {description: 0}})

Meteor.publish "admin", () -> 
  if Permissions.isUser(this.userId) then Meteor.users.find(this.userId, {fields: admin: 1})

Meteor.publish 'members', () ->
  if Permissions.isAdmin(this.userId) then Meteor.users.find({})



Meteor.publish 'post', (postId) ->
  search = {}
  if Permissions.isUser(this.userId) 
    search = {_id: postId}
  else
    search = {_id: postId, public:true}

  postHandle = Posts.find(search).observe
    added: (post) =>
      user = Meteor.users.findOne(post.authorId, fields: profile: 1);
      post.author = user.profile.name
      @added('posts', post._id, post);
    removed: (id) ->
      @removed('posts', id, _.keys(oldPost))

  if postHandle
    @ready()
    @onStop -> 
      if postHandle
        postHandle.stop()
     
