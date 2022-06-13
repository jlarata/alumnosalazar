

var randNums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22];
var alumnes = []
var primera = 0;


function AzarTotal() {
  alumnxs = document.querySelectorAll('.columna1');

  /* arma un array tomando los valores de la columna1*/
  for(var i=0; i<alumnxs.length; i++){
    alumne = alumnxs[i].innerHTML;
    insertarAlumne(alumne);
    }

  /* borra los valores de la columna 1 */
  for(var i=0; i<alumnxs.length; i++){
    alumnxs[i].innerHTML = ''
    }

  /* vuelve a agregar los valores */

  for(var i=0; i<alumnxs.length; i++){

    var nroalumne = Math.floor(Math.random() * alumnes.length)
    var data = alumnes[nroalumne];
    alumnes.splice(nroalumne, 1);
    var node = document.createTextNode(data);
    alumnxs[i].appendChild(node);

        }


  }


function masAzar() {
  alumnxs = document.querySelectorAll('.columna1');

  /* arma un array tomando los valores de la columna1*/
  for(var i=0; i<alumnxs.length; i++){
    alumne = alumnxs[i].innerHTML;
    insertarAlumne(alumne);
    }

  /* borra los valores de la columna 1 */
  for(var i=0; i<alumnxs.length; i++){
    alumnxs[i].innerHTML = ''
    }

  /* vuelve a agregar los valores */

  for(var i=0; i<alumnxs.length; i++){

    var data = alumnes[Math.floor(Math.random() * alumnes.length)];
    alumnes.splice(data, 1);
    var node = document.createTextNode(data);
    alumnxs[i].appendChild(node);

        }

  }

function insertarAlumne(alumnx) {
  alumnes.splice(0, 0, alumnx)
  }

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

function chequeado(esto) {
  esto.classList.toggle("chequeado");
};
