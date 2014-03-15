/*global Trellino, Backbone */
"use strict";

Trellino.Collections.Cards = Backbone.Collection.extend({
	model: Trellino.Models.Card,
	url: function () {
    return "lists/" + this.list.id + "/cards";
  },

  comparator: function (card) {
    return card.get('rank');
  }
});
