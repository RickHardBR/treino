document.addEventListener('DOMContentLoaded', function () {
    // Lógica para exibir/ocultar inputs com checkboxes
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

    // Função para voltar à página anterior
    function goBack() {
        // Verifica se há histórico para voltar
        if (document.referrer && document.referrer.includes(window.location.hostname)) {
          history.back(); // Volta para a página anterior dentro do mesmo site
        } else {
          window.location.href = "index.html"; // Vai para a index se não houver histórico interno
        }
    }
    const backButton = document.getElementById('backButton');
    if (backButton) {
        backButton.addEventListener('click', goBack);
    }

    // Fullscreen
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    const elem = document.documentElement;
    let isFullscreen = false;

    if (fullscreenBtn) {
        fullscreenBtn.addEventListener('click', function () {
            if (!isFullscreen) {
                openFullscreen();
            } else {
                exitFullscreen();
            }
        });
    }

    function openFullscreen() {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
        isFullscreen = true;
        updateButton();
    }

    function exitFullscreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        isFullscreen = false;
        updateButton();
    }

    function updateButton() {
        if (fullscreenBtn) {
            fullscreenBtn.textContent = isFullscreen ? 'Tela Normal' : 'Tela Cheia';
        }
    }

    document.addEventListener('fullscreenchange', () => {
        isFullscreen = !!document.fullscreenElement;
        updateButton();
    });
});
