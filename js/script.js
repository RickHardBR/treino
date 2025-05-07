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
        swipe: true, // Permite arrastar para escolher outro vídeo
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
  // Função para solicitar o modo tela cheia
  function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari e Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
    }
    isFullscreen = true; // Atualiza o estado para true
    updateButton(); // Atualiza o texto e o comportamento do botão
}

// Função para sair do modo tela cheia
function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { /* Firefox */
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { /* Chrome, Safari e Opera */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE/Edge */
        document.msExitFullscreen();
    }
    isFullscreen = false; // Atualiza o estado para false
    updateButton(); // Atualiza o texto e o comportamento do botão
}