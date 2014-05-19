Trellino.Models.Board = Backbone.Model.extend({
  urlRoot: "api/boards",

  parse: function(jsonResp){
 
    if (jsonResp.lists) {
      this.lists().set(jsonResp.lists, {parse: true});
      var that = this;
      // jsonResp.lists.forEach(function(list){
      //   if (list.cards.length !== 0){
      //     that.cards().set(list.cards);
      //   }
      // })
      delete jsonResp.lists;
    }

    return jsonResp;
  },

  lists: function(){
    if (!this._lists){
      this._lists = new Trellino.Collections.BoardLists([], {
        board: this,
      })
    }
    return this._lists;
  },

  // cards: function(){
  //   if (!this._cards){
  //     this._cards = new Trellino.Collections.ListCards([], {
  //       list: this, 
  //     })
  //   }
  //   return this._cards;
  // },
  
});