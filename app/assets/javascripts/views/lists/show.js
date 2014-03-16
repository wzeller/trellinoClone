/*global Backbone, Trellino, JST, $ */
'use strict';

Trellino.Views.ListShow = Backbone.View.extend({
  template: JST['lists/show'],

  events: {
    'click .new-card' : 'newCardForm'
  },

  initialize: function () {
    this.listenTo(this.model, 'all', this.render);
    this.listenTo(this.model.cards(), 'add', this.render);
  },

  newCardForm: function (event) {
    event.preventDefault();
    $(event.currentTarget).removeClass('new-card');
    var view = new Trellino.Views.CardForm({
      list: this.model
    });
    $(event.currentTarget).html(view.render().$el);
  },

  render: function () {
    var content = this.template({
      list: this.model
    });
    this.$el.html(content);
    return this;
  },
});
