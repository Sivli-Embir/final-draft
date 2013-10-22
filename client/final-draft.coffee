Accounts.ui.config passwordSignupFields: 'USERNAME_AND_EMAIL'
Meteor.subscribe('admin')
Meteor.subscribe('members')

Template.layout.rendered = ->
  switch Router.current().route.name
    when 'home'
      $('#home-nav').addClass('active')
    when 'admin'
      $('#admin-nav').addClass('active')
    when 'listPosts'
      $('#posts-nav').addClass('active')
    when 'newPost'
      $('#posts-nav').addClass('active')
    when 'editPost'
      $('#posts-nav').addClass('active')
    when 'showPost'
      $('#posts-nav').addClass('active')

Template.layout.prospectiveMemberCount = -> Meteor.users.find({emails: {$elemMatch: {verified: false}}}).count() || undefined

Template.postsNav.rendered = ->
  switch Router.current().route.name
    when 'listPosts'
      $('#list-post-sub-nav').addClass('active')
    when 'newPost'
      $('#new-post-sub-nav').addClass('active')  
  
Template.searchNFilter.publishableFilter = -> Session.get('publishableFilter')
Template.searchNFilter.reviewFilter = -> Session.get('reviewFilter')

Template.searchNFilter.events
  'click button.filter, tap button.filter': (e) ->
    e.preventDefault()
    switch e.target.id
      when 'publishableFilter'
        Session.set('publishableFilter',  not Session.get('publishableFilter'))
      when 'reviewFilter'
        Session.set('reviewFilter', not Session.get('reviewFilter'))
  'keyup [name=search]': (e,context) ->
      Router.go('/posts');
      Session.set("search_keywords", e.currentTarget.value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"))

Template.newPost.events
  'submit': (e) ->
    e.preventDefault()
    p = new Post()
    p.title = $("#title").val()
    p.link = $("#link").val()
    p.description = $("#description").val()
    p.public = $("#public").prop('checked')
    p.publishable = $("#publishable").prop('checked')
    p.review = $("#review").prop('checked')
    result = p.create()
    if result then Router.go("/posts/#{p._id}")
    else console.log result

Template.editPost.events
  'submit': (e) ->
    e.preventDefault()
    p = this.post
    p.title = $("#title").val()
    p.link = $("#link").val()
    p.description = $("#description").val()
    p.public = $("#public").prop('checked')
    p.publishable = $("#publishable").prop('checked')
    p.review = $("#review").prop('checked')
    if p.save() then Router.go("/posts/#{p._id}")
    else console.log p.validate()

Template.footer.events
  'click .back-to-top': (e) -> $("html, body").animate({ scrollTop: 0 }, "slow");

Template.listPosts.path = -> Router.path('showPost', {id: this._id})

Template.listPosts.search_keywords = -> Session.get("search_keywords")

Template.editPost.rendered = ->
  $("option[value=#{this.data.post.type}]").attr('selected', 'selected');
  if this.data.post.public then $("#public").attr('checked', 'checked');
  if this.data.post.publishable then $("#publishable").attr('checked', 'checked');
  if this.data.post.review then $("#review").attr('checked', 'checked');

Handlebars.registerHelper 'prune', (text, number) ->
  _(text).prune(number)

Handlebars.registerHelper 'moment', (unixTimestamp) ->
  moment(unixTimestamp).format('LLL');

Handlebars.registerHelper 'route', (routeName) ->
  (routeName == Router.current().route.name)

Handlebars.registerHelper 'count', (collection) ->
 if collection then collection.count()

Handlebars.registerHelper 'ether', (bool1, bool2) -> (bool1 or bool2)

Template.admin.events
  'click .activate-member': (e) ->
    Meteor.call 'activateMember', this._id
  'click .deactivate-member': (e) ->
    Meteor.call 'deactivateMember', this._id
  'click .remove-member': (e) ->
    Meteor.call 'removeMember', this._id

Template.home.rendered = ->
  developerKey = '8GNpCGbLv_XponALsPfp9YA7'
  loadPicker = -> gapi.load('picker', {'callback': createPicker})
  createPicker = ->  
    picker = new google.picker.PickerBuilder().addView(google.picker.ViewId.IMAGE_SEARCH).setDeveloperKey(developerKey).setCallback(pickerCallback).build();
    picker.setVisible(true)
  pickerCallback = (data) ->
    url = 'nothing';
    if (data[google.picker.Response.ACTION] == google.picker.Action.PICKED) 
      doc = data[google.picker.Response.DOCUMENTS][0];
      url = doc[google.picker.Document.URL];
    message = 'You picked: ' + url;
    document.getElementById('result').innerHTML = message;
  
