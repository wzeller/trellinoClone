/*global Trellino, Backbone */
'use strict';

Trellino.Collections.Boards = Backbone.Collection.extend({
	model: Trellino.Models.Board,
	url: '/api/boards',

  getOrFetch: function (id) {
    var model = this.get(id);
    if(!model) {
      model = new Trellino.Models.Board({ id: id });
      model.collection = this;
    }
    model.fetch(); // fetch anyways
    return model;
  }
});

Trellino.boards = new Trellino.Collections.Boards();
