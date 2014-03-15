/*global Trellino, Backbone */
"use strict";

Trellino.Collections.Cards = Backbone.Collection.extend({
  initialize: function (options) {
    this.list = options.list;
  },

	model: Trellino.Models.Card,

	url: function () {
    return "lists/" + this.list.id + "/cards";
  },

  comparator: function (card) {
    return card.get('rank');
  }
});
