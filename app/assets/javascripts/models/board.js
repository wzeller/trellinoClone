Trellino.Models.Board = Backbone.Model.extend({
  urlRoot: "api/boards",

  lists: function(){
    if (!this._lists){
      this._lists = new Trellino.Collections.BoardLists([], {
        board: this,
      });
    }
    return this._lists;
  }
  
});