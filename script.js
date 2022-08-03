let x = document.getElementById('color-palette');
let y = document.getElementById('pixel-board');
let z = document.getElementById('clear-board');
let a = 'rgb(0, 0, 0)';
  
function mudarCor1 (parametro){
    let selected = document.querySelector('.selected');
    selected.classList.remove('selected');
    parametro.target.classList.add('selected');
}
x.addEventListener('click', mudarCor1)
function resultado (){
  let preto = document.getElementsByClassName('color')[0]
  preto.classList.add('selected')
}
resultado()
//ele está errando pq já tem um valor adicionado. Tenho que apagar a cor pre definida antes que o compu...
function mudarCor (parametro1) {
let selected = document.querySelector('.selected');
selected.classList.remove('selected');
parametro1.target.classList.add('selected');
let cor = window.getComputedStyle(selected);
let corADD = cor.getPropertyValue('background-color');
return a = corADD
}
x.addEventListener('click', mudarCor)

function addCor (parametro2) {  
parametro2.target.style.backgroundColor = a
}
 y.addEventListener('click', addCor)

 function limpar (){  
 let selected = document.getElementsByClassName('pixel');
 for (let i = 0; i<selected.length; i += 1){
selected[i].style.backgroundColor = "white"
 }
}
z.addEventListener('click', limpar)



//function quadroEmBranco (parametro){
//    let localização = document.GetElementsByClassName('pixel')
//    let localizaçãoPai = document.getElementById('pixel-board')
//    for (let index = 0; index<parametro.length; index += 1) {
//        for(let i = 0; i<parametro.length; index += 1){
//       let pixel = document.createElement('div')}
//    }
//}
