

/*function randomStudents() {
  alert("pará loca, recién armé el esqueleto!")
 numeros = document.querySelectorAll('.columna2');
}*/

var randNums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22];

function randomStudents () {
  var numeros = document.querySelectorAll('.columna2');

  for(var i=0; i<numeros.length; i++){
      /*data = Math.floor(Math.random()*(randNums.length));*/
      var data = randNums[Math.floor(Math.random() * randNums.length)];
      var node = document.createTextNode(data);
      numeros[i].appendChild(node);
      var index = randNums.indexOf(data);
      randNums.splice(index, 1)
      }

}
