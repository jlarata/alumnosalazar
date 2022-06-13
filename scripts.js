

var randNums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22];
var primera = 0;

function randomStudents () {

  numeros = document.querySelectorAll('.columna2');

  if (primera == 1) {
    for(var i=0; i<numeros.length; i++){
    numeros[i].innerHTML='';
    }
    meterNumeros();
    } else {
    meterNumeros();
    }
  }


function meterNumeros() {

      for(var i=0; i<numeros.length; i++){
      var data = randNums[Math.floor(Math.random() * randNums.length)];
      var node = document.createTextNode(data);
      numeros[i].appendChild(node);
      var index = randNums.indexOf(data);
      randNums.splice(index, 1)
      }

      randNums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]
      primera = 1;

  }
