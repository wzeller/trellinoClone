/*global Trellino, Backbone, _ */
'use strict';

Trellino.Models.List = Backbone.Model.extend({
  parse: function (resp) {
    console.log("parsing list");
    if(resp.cards) {
      this.cards().set(resp.cards, { parse: true });
      delete resp.cards;
    }
    return resp;
  },

  cards: function () {
    if(!this._cards) {
      this._cards = new Trellino.Collections.Cards([], { list: this });
    }
    return this._cards;
  },

  normalizeRanks: function (deletedCard, collection) {
    console.log('HEY THERE BROTHER');
    var deletedCardRank = deletedCard.get('rank');
    if (deletedCardRank === collection.models.length + 1) {
      return;
    } else {
      collection.each(function (card) {
        var cardRank = card.get('rank');
        if (cardRank > deletedCardRank) {
          card.set({rank: cardRank - 1});
          card.save();
        }
      });
    }
  }

});
