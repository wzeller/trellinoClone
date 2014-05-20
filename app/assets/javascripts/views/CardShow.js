Trellino.Views.CardShow = Backbone.View.extend({
  template: JST['cards/show_card'],
  render: function(){

    var renderedContent = this.template({
      card: this.model,
    });
    this.$el.html(renderedContent);
    $(".destroyBtn").hide();
    return this;
  },
})
