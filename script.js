let secaoDeCores = document.getElementById('color-palette');
let quadroEmBranco = document.getElementById('pixel-board');
let botaoLimpar = document.getElementById('clear-board');
let corInicial = 'rgb(0, 0, 0)';

function mudarCor (eventclick){
    let selected = document.querySelector('.selected');
    selected.classList.remove('selected');
    eventclick.target.classList.add('selected');
}
//
secaoDeCores.addEventListener('click', mudarCor)
function corPredefinida (){
  let preto = document.getElementsByClassName('color')[0]
  preto.classList.add('selected')
}
corPredefinida()
//
function pegaCor (eventclick1) {
let selected = document.querySelector('.selected');
selected.classList.remove('selected');
eventclick1.target.classList.add('selected');
let cor = window.getComputedStyle(selected);
let corADD = cor.getPropertyValue('background-color');
return corInicial = corADD
}
secaoDeCores.addEventListener('click', pegaCor)
//
function addCor (parametro2) {  
parametro2.target.style.backgroundColor = corInicial
}
 quadroEmBranco.addEventListener('click', addCor)
//
 function limpar (){  
 let selected = document.getElementsByClassName('pixel');
 for (let i = 0; i<selected.length; i += 1){
selected[i].style.backgroundColor = "rgb(255, 255, 255)"
 }
} 
botaoLimpar.addEventListener('click', limpar)



//function quadroEmBranco (parametro){
//    let localização = document.GetElementsByClassName('pixel')
//    let localizaçãoPai = document.getElementById('pixel-board')
//    for (let index = 0; index<parametro.length; index += 1) {
//        for(let i = 0; i<parametro.length; index += 1){
//       let pixel = document.createElement('div')}
//    }
//}
