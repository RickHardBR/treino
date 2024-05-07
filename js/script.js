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
        // Aqui estamos definindo a configuração appendArrows
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
});

