class @AdminController extends RouteController 
  data: -> 
    prospectiveMembers = Meteor.users.find({emails: $elemMatch: verified: false})
    members = Meteor.users.find({$and:[emails: {$elemMatch: {verified: true}}, admin: null]})
    obj = {}
    if prospectiveMembers.count() then obj.prospectiveMembers = prospectiveMembers
    if members.count() then obj.members = members
    obj
  run: -> super
