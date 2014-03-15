/*global Trellino, Backbone */
"use strict";

Trellino.Collections.Lists = Backbone.Collection.extend({
	model: Trellino.Models.List,
	url: function () {
		return "boards/" + this.board.id + "/lists";
	},

  comparator: function (list) {
    return list.get('rank');
  }
});
