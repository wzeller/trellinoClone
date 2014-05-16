Trellino.Views.BoardShow = Backbone.View.extend({

  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.lists, "sync", this.render);
  },

  template: JST['boards/show_board'],

  render: function(){
    var renderedContent = this.template({
      board: this.model,
      links: this.links,
    });

    this.$el.html(renderedContent);
    return this;
  }

})