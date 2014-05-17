Trellino.Views.BoardUpdate = Backbone.View.extend({

  initialize: function(){
    this.render();
  },
  
  template: JST['boards/update_board'],

  events: {
    "submit form": "update"
  },

  render: function(){
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  },

  update: function(event){
    event.preventDefault();
    var params = $(event.currentTarget).serializeJSON();
    var updatedBoard = new Trellino.Models.Board(params);
    updatedBoard.set("id", this.model.id);
    updatedBoard.save({}, {

      success: function(){
        Backbone.history.navigate(updatedBoard.url(), {trigger: true});
      },
    });
  },

});