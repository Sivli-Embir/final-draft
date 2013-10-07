Router.configure
  layoutTemplate: 'layout'
  notFoundTemplate: 'notFound'


Router.map ->
  @route 'home',  path: '/'
  @route 'about',  path: '/about'
  @route 'newMember',  path: '/new-member'
  @route 'admin',  path: '/admin', controller: 'AdminController'

  @route 'listPosts',  path: '/posts', controller: 'PostsController', action: 'list'
  @route 'newPost',  path: '/posts/new', controller: 'PostsController', action: 'new'
  @route 'editPost',  path: '/posts/:id/edit', controller: 'PostsController', action: 'edit'
  @route 'showPost',  path: '/posts/:id/delete', controller: 'PostsController', action: 'delete'
  @route 'showPost',  path: '/posts/:id', controller: 'PostsController', action: 'show'
  

  @route 'notFound', path: '*'