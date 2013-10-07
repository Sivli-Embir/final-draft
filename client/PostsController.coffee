class @PostsController extends RouteController 
  waitOn: ->
    id = @params.id
    switch Router.current().route.name
      when 'listPosts'
        Meteor.subscribe('posts')
      when 'showPost'
        Meteor.subscribe('post', id)
      when 'editPost'
        Meteor.subscribe('post', id)
      else {ready: -> true}
  onBeforeRun: ->
    user = Meteor.user();
  data: -> 
    switch Router.current().route.name
      when 'listPosts' 
        #filter out tags
        f = [{}]
        if Session.get('publishableFilter') then f.push publishable: false
        if Session.get('reviewFilter') then f.push review: false
        Session.set('searchFilter', f) #must be a reactive source, session makes the most sense.

        #search by terms
        keywords = new RegExp(Session.get("search_keywords"), "i")

        #set up data
        posts = Posts.find({$or:[{title:keywords}], $and: Session.get('searchFilter')}, {sort: {'updated_at': -1}});
        posts: posts
        postCount: posts.count()
      when 'showPost' then post: Posts.findOne(@params.id);
      when 'editPost' then post: Posts.findOne(@params.id);
      else fake: null #This is required, otherwise data is being called with no data and the router goes nuts.
  run: -> super
  list: ->
    @template = 'listPosts'
    @run()
    console.log 'running posts list'
  show: -> 
    @template = 'showPosts'
    @run()
    console.log 'running posts show'
  edit: -> 
    @template = 'editPost'
    @run()
    console.log 'running posts edit'
  new: ->
    @template = 'newPost'
    @run()
    console.log 'running posts new'
  delete: ->
    if permissions.deletablePost() then console.log 'bang'

