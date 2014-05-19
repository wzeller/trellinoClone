Trellino.Collections.ListCards = Backbone.Collection.extend({

  model: Trellino.Models.Card,

  initialize: function(models, options){
    this.list = options.list;
    this.comparator = 'rank';
  },

});