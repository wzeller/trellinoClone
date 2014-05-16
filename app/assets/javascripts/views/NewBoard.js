Trellino.Views.NewBoard = Backbone.View.extend({
  
  initialize: function(){
    this.render();
  },

  template: JST["boards/new_board"],

  events: {
    "submit form": "submit"
  },

  render: function(){
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  },

  submit: function(event){
    event.preventDefault();
    var params = $(event.currentTarget).serializeJSON();
    var newBoard = new Trellino.Models.Board(params);
    newBoard.save({}, {
      success: function(){
        Trellino.Collections.boards.add(newBoard);
        Backbone.history.navigate("", {trigger: true});
      },

      error: function(){
        console.log(newBoard);
      }
    });
  }

})