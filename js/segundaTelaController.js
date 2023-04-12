var box = document.getElementById('box');
var contato1 = document.getElementById('contato1');
var contato2 = document.getElementById('contato2');

box.addEventListener('mouseover', function() {
    contato1.style.display = 'block'
    contato2.style.display = 'block'
});

box.addEventListener('mouseout', function() {
    contato1.style.display = 'none';
    contato2.style.display = 'none';
  });
