Trellino.Views.NewCard = Backbone.View.extend({
  
  initialize: function(){
    this.render();
  },

  template: JST["cards/new_card"],

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
    var newCard = new Trellino.Models.Card(params);
    newCard.set("card_id", this.model.id);
    newCard.save({}, {
      success: function(){
        that.model.collection.add(newCard);
        Backbone.history.navigate(that.model.url(), {trigger: true});
      },
    })
  }

})