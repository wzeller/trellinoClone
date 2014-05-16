Trellino.Views.BoardShow = Backbone.View.extend({

  initialize: function() {

    this.render();
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.collection, "sync", this.render);

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