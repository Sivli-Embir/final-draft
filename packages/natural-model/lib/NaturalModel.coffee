class NaturalModel
  constructor: (doc) -> 
    for name, value of doc then @[name] = value 
  @collection = null
  @schema = {}
  validate: (verbose) ->   
    context = @.constructor.schema.newContext();
    _self = _.omit(@.constructor.schema.clean(@),['_id'])
    context.validate(_self)
    context
  create: (duplicate) ->
    _self = @.constructor.schema.clean(@)
    if duplicate == true then _self = _.omit(_self, '_id')
    @_id = @.constructor.collection.insert _self, (error, result) -> 
      if error then return error
    true
  save: () -> 
    _self = _.omit @.constructor.schema.clean(@), '_id'
    unless @validate().isValid() then return false
    @.constructor.collection.update {_id: @._id}, $set: _self, (error, result) -> 
      if error then return error
    true
  remove: () -> 
    @.constructor.collection.remove @._id, (error) => 
      if error then return error 
    @._id = undefined
    true
  clean: () ->
    new @.constructor(@.constructor.schema.clean(@))
