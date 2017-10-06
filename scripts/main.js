$(document).ready(function() {
  const items = $('.radio__list-item');
  const elements = $('.radio__list-item-description');

  //domyslnie chowamy wszystkie elmenety
  elements.hide();

  items.on('click', function(event) {
    event.preventDefault();

    //ukrywamy stare elementy
    elements.hide();
    items.removeClass('radio__list-item--active');

    //dodajemy nowe elementy
    $(this).addClass('radio__list-item--active');
    $(this).find('div').show();
  });
})
