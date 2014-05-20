Trellino.Views.ListShow = Backbone.CompositeView.extend({

  //allows the entire nested view to be in a column
  className: "col-xs-2",

  initialize: function(){
    this.listenTo(this.model.cards(), "add", this.addCard);

    var that = this;
    this.cardViews = this.model.cards().each(function(card) {
      that.addCard(card)
    })
  },

  addCard: function(card){
    var cardView = new Trellino.Views.CardShow({model: card});
    this.addSubview('#card-info', cardView);
  },

  template: JST['lists/show_list'],

  render: function(){
  
    var renderedContent = this.template({
      list: this.model,
    });
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  },
})

