Trellino.Collections.Cards = Backbone.Collection.extend({
  
  model: Trellino.Models.Card,
  
  url: "api/cards/",
  
  getOrFetch: function(id){
    var model;
    var cards = this;
    if (model = cards.get(id)){
      return model;
    } else {
      model = new Trellino.Models.Card({id: id});
      model.fetch({
        success: function(){
          cards.add(model)
        }
      });
      return model;
    }
  },

});

Trellino.Collections.cards = new Trellino.Collections.Cards();