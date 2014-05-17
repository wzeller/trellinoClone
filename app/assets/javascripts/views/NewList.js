Trellino.Views.NewList = Backbone.View.extend({
  
  initialize: function(){
    this.render();
  },

  template: JST["lists/new_list"],

  events: {
    "submit form": "submit"
  },

  render: function(){
    var renderedContent = this.template({model: this.model});
    this.$el.html(renderedContent);
    return this;
  },

  submit: function(event){
    var that = this;
    event.preventDefault();
    var params = $(event.currentTarget).serializeJSON();
    var newList = new Trellino.Models.List(params);
    newList.set("board_id", this.model.id);
    newList.save({}, {
      success: function(){
        that.model.collection.add(newList);
        Backbone.history.navigate(that.model.url(), {trigger: true});
      },
    })
  }

})