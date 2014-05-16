Trellino.Models.Board = Backbone.Model.extend({
  urlRoot: "api/boards/",

  links: function(){
    if (!this._links){
      this._links = new Trellino.Collections.BoardLinks([], {
        board: this
      });
      return this.links;
    }
  }
  
});