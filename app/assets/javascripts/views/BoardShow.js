Trellino.Views.BoardShow = Backbone.View.extend({

  initialize: function() {
    this.render();
    this.listenTo(this.model, "sync destroy", this.render);
    this.listenTo(this.collection, "sync", this.render);
    
  },

  events: {
    "click button.destroy": "handleDestroy"
  },

  handleDestroy: function(){
    var that = this; 
    this.model.destroy({
      success: function(){
        that.remove()
        Backbone.history.navigate("", {trigger: true})
      }
    });
  },

  template: JST['boards/show_board'],

  render: function(){

    var renderedContent = this.template({
      board: this.model,
      lists: this.collection,
    });
    
    this.$el.html(renderedContent);
    return this;
  }

})