Trellino.Views.BoardShow = Backbone.CompositeView.extend({

  initialize: function() {
    this.render();
    this.listenTo(this.model, "sync destroy", this.render);
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, "add", this.addList);
    var that = this;
    this.listViews = this.collection.each(function(list) {
      that.addList(list);
    })
  },

  addList: function(list){
    var listView = new Trellino.Views.ListShow({ model: list });
    this.addSubview('#listContents', listView);
  },

  events: {
    "click button.destroy": "handleBoardDestroy",
    "mouseover div.card" : "displayButton",
    "mouseleave div.card" : "hideButton", 
    "click button.destroyBtn": "handleCardDestroy",
  },

  displayButton: function(event){
    $(event.currentTarget).find('button').show();
  },

  hideButton: function(event){
    $(event.currentTarget).find('button').hide();
  },

  handleBoardDestroy: function(){
    var that = this; 
    this.model.destroy({
      success: function(){
        that.remove()
        Backbone.history.navigate("", {trigger: true})
      }
    });
  },

  handleCardDestroy: function(event){
    var buttonId = $(event.currentTarget).attr("data-id");
    var card = Trellino.Collections.cards.getOrFetch(buttonId);
    var board = this;
    card.destroy({
      success: function(){
        board.render();
      }
    })
  },

  template: JST['boards/show_board'],

  render: function(){
  
    var renderedContent = this.template({
      board: this.model
    });
    
    this.$el.html(renderedContent);
    this.attachSubviews();
      
    return this;
  },

})