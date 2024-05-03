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
