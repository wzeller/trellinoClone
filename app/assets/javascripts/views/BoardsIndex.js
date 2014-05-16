Trellino.Views.BoardsIndex = Backbone.View.extend({
  
  initialize: function(){
    this.render();
    this.listenTo(this.collection, "sync add remove", this.render);
  },

  template: JST["boards/index"],
  
  render: function(){
    var renderedContent = this.template({boards: this.collection});
    this.$el.html(renderedContent);
    return this;
  },
})