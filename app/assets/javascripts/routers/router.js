/*global Trellino, Backbone, _ */
'use strict';

Trellino.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },

  routes: {
    '': 'boardsIndex',
    'boards/new': 'boardNew',
    'boards/:id': 'boardShow',
    'cards': 'cardsIndex'
  },

  boardsIndex: function () {
    var indexView = new Trellino.Views.BoardsIndex({
      collection: Trellino.boards
    });

    Trellino.boards.fetch();
    this._swapView(indexView);
  },

  boardNew: function () {
    var board = new Trellino.Models.Board();
    var view = new Trellino.Views.BoardNew({
      model: board
    });
    this._swapView(view);
  },

  boardShow: function (id) {
    var board = Trellino.boards.getOrFetch(id);

    var view = new Trellino.Views.BoardShow({
      model: board
    });

    this._swapView(view);
  },

  cardsIndex: function () {
    var view = new Trellino.Views.CardsUserIndex();
    this._swapView(view);
  },

  _swapView: function (view) {
    if (this._currentView) {
      this._currentView.remove();
    }
    this._currenView = view;
    this.$rootEl.html(view.render().$el);
  }
});
