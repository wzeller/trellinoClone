Trellino.Routers.AppRouter = Backbone.Router.extend({

  routes: {
    "": "index",
    "boards/new": "new",
    "boards/:id": "show",
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
    var newShow = new Trellino.Views.BoardShow({model: model});
    $('#content').html(newShow.$el);
  }

})