Trellino.Models.Board = Backbone.Model.extend({
  urlRoot: "api/boards",

  parse: function(jsonResp){
 
    if (jsonResp.lists) {
      this.lists().set(jsonResp.lists, {parse: true});
      var that = this;
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
  
});