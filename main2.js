// Versione due

$('.header-right > a').click(function(){

  // Si va ad aggiungere le classe active, cosi da rendere visibile l'hamburger menu
  $('.hamburger-menu').addClass('active');

  // Si toglie la classe active, cosi hamburger-menu ritorna ad essere display none
  $('.close').click(function(){
    $('.hamburger-menu').removeClass('active');
  });
});
