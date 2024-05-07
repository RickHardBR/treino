document.addEventListener('DOMContentLoaded', function () {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const inputs = document.querySelectorAll('input[type="text"]');

  checkboxes.forEach(function (checkbox, index) {
      checkbox.addEventListener('change', function () {
          if (checkbox.checked) {
              inputs[index].style.display = 'inline-block';
          } else {
              inputs[index].style.display = 'none';
          }
      });
  });
});

$(document).ready(function(){
    $('.carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        dots: true,
        appendArrows: $('.carousel-arrows'),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Adiciona um manipulador de eventos para trocar o vídeo quando clicado
    $('.carousel-item').on('click', function() {
        var videoSrc = $(this).find('iframe').attr('src');
        // Pausa o vídeo atual antes de trocar
        $('.carousel-item iframe').each(function() {
            $(this).attr('src', $(this).attr('src'));
        });
        // Inicia o vídeo clicado
        $(this).find('iframe').attr('src', videoSrc);
    });
});


