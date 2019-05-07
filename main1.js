// Viene fornito l’HTML e il CSS, che dovrete leggere e comprendere e starà a voi scrivere il JS utilizzando jQuery, al fine di avere un hamburger menu simile a quello che trovate sul sito di Boolean.
// Appare il simbolo delle 3 linee solo quando lo schermo è < 1000px, al click del simbolo appare un div che copre l’intero schermo con i link alle sezioni del sito.
// Un click sul simbolo X, fa scomparire il div

//Funzione che mi permette di regolare il funzionamento generale del Menu
$('.header-right > a').click(function(){

  // Al click del simbolo, con il comando show mi viene mostrato il contenuto della classe hamburger menu
  $('.hamburger-menu').show(1000);

  // Al contrario al momento del click sul simbolo con classe close, andrò a nascondere l'hamburger menu con hide
  $('.close').click(function(){
    $('.hamburger-menu').hide(1000);
  })
});
