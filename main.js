function tocaSomPom(idElementoAudio){
   document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for(let contador = 0; contador < listaDeTeclas.length; contador++){
}
      const tecla = listaDeTeclas[contador];
      const intrumento = tecla.classList[1];
      const idAudio = 'Som_${intrumento}';

tecla.onclick = function () {
    tocaSom(idAudio);
}
 
  tecla.onkeydown = function (evento){

  

console.log(evento.code == 'Space')

        if (evento.code ==='Space'){
  tecla.onkeydown = function*()
  se (evento.code == 'Enter') {
            tecla.classList.add('ativa');

      }
      }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
      }
        
  }     
tecla.onkeydown = function (evento){
     console.log (evento);
}