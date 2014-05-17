Trellino.Routers.AppRouter = Backbone.Router.extend({

  routes: {
    "": "index",
    "api/boards/new": "new",
    "api/boards/:id/lists": "newList",
    "api/boards/:id": "show",
    "api/boards/:id/update": "update",
  },


  index: function(){
    Trellino.Collections.boards.fetch();
    var indexView = new Trellino.Views.BoardsIndex({collection: Trellino.Collections.boards});
    $('#content').html(indexView.$el);
  },

  new: function(){
    var newBoard = new Trellino.Views.NewBoard();
    $('#content').html(newBoard.$el);
  },

  show: function(id){
    var model = Trellino.Collections.boards.getOrFetch(id);
    model.lists().fetch();
    var newShow = new Trellino.Views.BoardShow({model: model, collection: model.lists()});
    $('#content').html(newShow.$el);
  },

  newList: function(id){
    var model = Trellino.Collections.boards.getOrFetch(id);
    var newList = new Trellino.Views.NewList({model: model});
    $('#content').html(newList.$el);
  },

  update: function(id){
    var model = Trellino.Collections.boards.getOrFetch(id);
    var updateBoard = new Trellino.Views.BoardUpdate({model: model})
    $('#content').html(updateBoard.$el);
  },

})