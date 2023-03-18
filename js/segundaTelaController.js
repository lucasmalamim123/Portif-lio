var btn2 = document.querySelector('#btnHome');
var teste = document.querySelector('.teste')

btn2.addEventListener('click', function() {
    if(teste.style.display === 'block'){
        teste.style.display = 'none';
    } else{
        teste.style.display = 'block';
    }
});