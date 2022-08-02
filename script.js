window.onload = function(){
  function resultado (){
  let preto = document.getElementsByClassName('color')[0]
  preto.classList.add('selected')
}
resultado()
}
let x = document.getElementById('color-palette')
function mudarCor (parametro) {
let selected = document.querySelector('.selected')
selected.classList.remove('selected')
parametro.target.classList.add('selected')
} 
x.addEventListener("click", mudarCor)

//function quadroEmBranco (parametro){
//    let localização = document.GetElementsByClassName('pixel')
//    let localizaçãoPai = document.getElementById('pixel-board')
//    for (let index = 0; index<parametro.length; index += 1) {
//        for(let i = 0; i<parametro.length; index += 1){
//       let pixel = document.createElement('div')}
//    }
//}
