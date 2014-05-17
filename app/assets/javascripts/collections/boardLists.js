Trellino.Collections.BoardLists = Backbone.Collection.extend({
  
  url: function(){
    return this.board.url() + "/lists";
  },

  model: Trellino.Models.List,

  initialize: function(models, options){
    this.board = options.board;
    this.comparator = 'rank';
  },

});