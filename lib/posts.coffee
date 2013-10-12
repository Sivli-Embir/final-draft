@Posts = new Meteor.Collection 'posts', 
  transform: (doc) ->
    new Post(doc)

class @Post extends @NaturalModel
  @collection = Posts

  @schema = new SimpleSchema
    _id:
      type: String
      optional: true
    title: 
      type: String
      max: 100
    authorId:
      type: String
    link:
      type: String
    description:
      type: String
    edited_at:
      type: Number
    public:
      type: Boolean
    publishable:
      type: Boolean
    review:
      type: Boolean

Posts.before.insert (userId, doc) ->
  doc.edited_at = moment().valueOf()
  doc.authorId = userId
  doc

Posts.allow
  insert: (userId, doc) -> Permissions.isUser(userId)
  update: (userId, doc, fieldNames, modifier) -> Permissions.isOwner(doc, userId)
  remove: (userId, doc) -> Permissions.isAdmin(userId)

Posts.deny
  insert: (userId, doc) -> not new Post(doc).validate().isValid()
  update: (userId, doc, fieldNames, modifier) ->
    out = new Post(modifier.$set)
    not out.validate().isValid()
