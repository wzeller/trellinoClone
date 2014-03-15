/*global Trellino, Backbone */
"use strict";

Trellino.Collections.Boards = Backbone.Collection.extend({
	model: Trellino.Models.Board,
	url: "/api/boards"
});
