/*globals window, Trellino:true, $, _, Backbone */
window.Trellino = {
  Models: {},
  Collections: {},
  Views: {},
  initialize: function () {
    Trellino.router = new Trellino.Router({
      $rootEl: $('#content')
    });
    Backbone.history.start();

    //     Trellino.myID = parseInt($("#bootstrapped_user_id").html(), 10);
    //
    //     $('ul.nav').append("\
    //     <li class='dropdown'>\
    //       <a\
    //         class='dropdown-toggle'\
    //         id='dLabel'\
    //         role='button'\
    //         data-toggle='dropdown' data-target='#'\
    //         href='#'\
    //       >\
    //       My Boards\
    //       <b class='caret'></b>\
    //       </a>\
    //       <ul\
    //         class='dropdown-menu'\
    //         id='boards-menu'\
    //         role='menu'\
    //         aria-labelledby='dLabel'\
    //       >\
    //       </ul>\
    //     </li>\
    //     <li>\
    //       <a href='#/cards'>My Cards</a>\
    //     </li>\
    //     ");
    //
    //     Trellino.boards.each(function (board) {
    //       $('#boards-menu').append("<li>" +
    //         "<a href='#boards/" +
    //         board.id + "'>" +
    //         board.escape('title') +
    //         "</a></li>");
    //     });
    //
    //     $('#boards-menu').append("<li class='divider'></li>");
    //     $('#boards-menu').append("<li><a href='#'>See All</a></li>");
    //     $('#boards-menu').append("<li><a href='#boards/new'>New Board</a></li>");
    //
    //     $('.dropdown-toggle').on('click', function () {
    //       $('.dropdown-toggle').dropdown();
    //     });
  }
};
