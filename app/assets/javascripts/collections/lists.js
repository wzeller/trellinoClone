/*global Trellino, Backbone */
'use strict';

Trellino.Collections.Lists = Backbone.Collection.extend({
  initialize: function (models, options) {
    console.log("initializing list with board: " + options.board.id);
    this.board = options.board;
  },

	model: Trellino.Models.List,

	url: function () {
		return 'api/boards/' + this.board.id + '/lists';
	},

  comparator: function (list) {
    return list.get('rank');
  }
});
