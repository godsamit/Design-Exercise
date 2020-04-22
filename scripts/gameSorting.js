var userGames = $('.userGames').isotope({
  // options
  itemSelector: '.user-game',
  layoutMode: 'vertical'
});

$('.filters').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  userGames.isotope({ filter: filterValue });
});

$('.filters').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});