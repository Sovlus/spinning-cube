const box = document.querySelector('.box');

box.addEventListener('mouseenter', function() {
  box.style.transform = 'scale(1.5)';
});

box.addEventListener('mouseleave', function() {
  box.style.transform = 'scale(1)';
});
