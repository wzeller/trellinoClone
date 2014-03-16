/*global Trellino, Backbone, $, _, JST */
'use strict';

Trellino.Views.BoardForm = Backbone.View.extend({
	events: {
		'submit': 'create'
	},

	template: JST['boards/form'],

  render: function () {
    var content = this.template({
			board: this.model
    });
    this.$el.html(content);
    return this;
  },

	create: function (event) {
		event.preventDefault();
		var newBoardAttrs = $('form').serializeJSON().board;
		this.collection.create(newBoardAttrs, {
      wait: true,
			success: function (savedBoard) {
				var newBoardURL = '#boards/' + savedBoard.id;
        Trellino.boardsRouter.navigate(newBoardURL, { trigger: true });
			}
		});
	},

});
