Trellino.Collections.ListCards = Backbone.Collection.extend({

  url: function(){
    return this.lists.url() + "/cards";
  },

  model: Trellino.Models.Card,

  initialize: function(models, options){
    this.list = options.list;
    this.comparator = 'rank';
  },

});

