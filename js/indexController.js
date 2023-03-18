var btn = document.querySelector('#btn-avancar');
var container = document.querySelector('.container')
var tela = document.querySelector('.tela')

btn.addEventListener('click', function() {
    if(container.style.display === 'block'){
        container.style.display = 'none';
        tela.style.display = 'block';
    } else{
        container.style.display = 'block';
        tela.style.display = 'none';
    }
});

function avancar(){
    setTimeout(tela, 8000)
    function tela(){
        window.location.href = "segundaTela.html"
    }
}
