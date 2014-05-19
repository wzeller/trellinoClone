Trellino.Collections.Lists = Backbone.Collection.extend({
  
  model: Trellino.Models.List,
  
  url: "api/lists",
  
  getOrFetch: function(id){
    var model;
    var lists = this;
    if (model = lists.get(id)){
      return model;
    } else {
      model = new Trellino.Models.List({id: id});
      model.fetch({
        success: function(){
          lists.add(model)
        }
      });
      return model;
    }
  },

});

Trellino.Collections.lists = new Trellino.Collections.Lists();