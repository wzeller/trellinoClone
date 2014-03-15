/*global Trellino, Backbone */
"use strict";

Trellino.Collections.TodoItems = Backbone.Collection.extend({
	model: Trellino.Models.TodoItem,

	url: function () {
    return "/cards/" + this.card.id + "/todo_items";
	},

  comparator: function (item) {
    return item.get('created_at');
  }
});
