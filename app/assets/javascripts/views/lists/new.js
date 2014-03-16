/*global Trellino, Backbone, $, _, JST */
"use strict";

Trellino.Views.ListNew = Backbone.View.extend({
  initialize: function (options) {
    this.board = options.board;
  },

  events: {
    "submit": "create",
    "click button.cancel": "cancel"
  },

  template: JST['lists/new'],

  render: function () {
    var content = this.template({
      list: new Trellino.Models.List()
    });
    this.$el.html(content);
    return this;
  },

  create: function (event) {
    event.preventDefault();
    var data = {
      title: this.$('#title').val(),
      rank: (this.board.lists().length + 1),
      board_id: this.board.id
    };
    this.board.lists().create(data);
  },

  cancel: function (event) {
    console.log("canceling");
    event.preventDefault();
    this.collection.trigger('add');
  }
});
