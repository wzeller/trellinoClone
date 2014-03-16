/*global Trellino, Backbone, _, JST */
'use strict';

Trellino.Views.CardForm = Backbone.View.extend({
  initialize: function (options) {
    this.list = options.list;
  },

  events: {
    'submit': 'create',
    'click button.cancel': 'cancel'
  },

  template: JST['cards/form'],

  render: function () {
    var content = this.template({
      card: new Trellino.Models.Card()
    });
    this.$el.html(content);
    return this;
  },

  create: function (event) {
    event.preventDefault();
    var data = {
      title: this.$('#title').val(),
      rank: this.list.cards().length + 1,
      list_id: this.list.id
    };
    this.list.cards().create(data);
  },

  cancel: function (event) {
    event.preventDefault();
    this.collection.trigger('add');
  }
});
