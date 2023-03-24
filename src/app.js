var hosszInp = document.querySelector('#hossz')
var  felotolasInp = document.querySelector('#felotolas')
var  fordulatszamInp = document.querySelector('#fordulatszam')
var megmunkidoInp = document.querySelector('#megmunkido')
var  calcButton = document.querySelector('#calcButton')

calcButton.addEventListener('click', ()=>{
    let hossz = hosszInp.value;
    let felotolas = felotolasInp.value;
    let fordulatszam = fordulatszamInp.value;

    let megmunkido = hossz/(felotolas*fordulatszam);
    megmunkidoInp.value = megmunkido;
    console.log(megmunkido)
})