var radioCliente = document.getElementById('cliente');
var radioPrestador = document.getElementById('prestador');
var divInformacoes = document.getElementById('informacoesAdicionais');

radioPrestador.addEventListener('click', function(e){
    divInformacoes.style.display='block';
});

radioCliente.addEventListener('click', function(e){
    divInformacoes.style.display='none';
});