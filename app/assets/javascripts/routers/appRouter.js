Trellino.Routers.AppRouter = Backbone.Router.extend({

  routes: {
    "": "index",
    "api/boards/new": "new",
    "api/boards/:id": "show",
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
  }

})