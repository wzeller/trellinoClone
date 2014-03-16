/*global Trellino, Backbone, $, _, JST */
'use strict';

Trellino.Views.ListForm = Backbone.View.extend({
  initialize: function (options) {
    this.board = options.board;
  },

  events: {
    'submit': 'create',
    'click button.cancel': 'cancel'
  },

  template: JST['lists/form'],

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
    event.preventDefault();
    // fake add so board rerenders
    this.board.lists().trigger('add');
  }
});
