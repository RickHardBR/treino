$(document).ready(function () {
  $('.carousel').each(function () {
      let $carousel = $(this);
      let $items = $carousel.find('.carousel-item');
      let currentIndex = 0;

      // Oculta todos, mostra o primeiro
      $items.hide().eq(currentIndex).show();

      // Botões dentro do mesmo grupo
      $carousel.siblings('.carousel-controls').find('.carousel-next').click(function () {
          $items.eq(currentIndex).hide();
          currentIndex = (currentIndex + 1) % $items.length;
          $items.eq(currentIndex).show();
      });

      $carousel.siblings('.carousel-controls').find('.carousel-prev').click(function () {
          $items.eq(currentIndex).hide();
          currentIndex = (currentIndex - 1 + $items.length) % $items.length;
          $items.eq(currentIndex).show();
      });
  });
});
