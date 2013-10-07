Meteor.methods
    searchVenues: ( matchText ) ->
      check(matchText, String);
      Venues.index.search(matchText)
    activateMember: (memberId) ->
      if Permissions.isAdmin(this.userId) then Meteor.users.update(memberId, $set: {'emails.0.verified': true})
    deactivateMember: (memberId) ->
      if Permissions.isAdmin(this.userId) and  this.userId isnt memberId then Meteor.users.update(memberId, $set: {'emails.0.verified': false})
    removeMember: (memberId) ->
      if Permissions.isAdmin(this.userId) and this.userId isnt memberId then Meteor.users.remove(memberId)
