/*global Trellino, Backbone, _ */
'use strict';

Trellino.Models.Board = Backbone.Model.extend({
  parse: function (resp) {
    if(resp.lists) {
      this.lists().set(resp.lists, { parse: true });
      delete resp.lists;
    }
    return resp;
  },

  lists: function () {
    if(!this._lists) {
      this._lists = new Trellino.Collections.Lists([], { board: this });
    }
    return this._lists;
  }
});
