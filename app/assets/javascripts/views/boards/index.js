/*global Trellino, Backbone, $, _, JST */
"use strict";

Trellino.Views.BoardsIndex = Backbone.View.extend({
	initialize: function () {
		this.listenTo(this.collection, 'remove sync', this.render);
	},

	template: JST['boards/index'],

  render: function () {
    var content = this.template({
      boards: this.collection
    });

    this.$el.html(content);
    return this;
  },

	delete: function (event) {
		var boardID = $(event.target).attr('data-id');
		var deletableBoard = this.collection.get(boardID);
		deletableBoard.destroy();
	}
});
