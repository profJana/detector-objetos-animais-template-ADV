//variáveis


function preload() {


}

function setup() {




  document.getElementById("status").innerHTML = "Detectando objetos"
}
function modeloCarregado() {
  
}
function mostrarResultado(error, results) {
  if (error) {
    
  }
  
}

function draw() {
  background(0)
 
  if (mensagem == true) {
    for (i = 0; i < objetos.length; i++) {
      console.log(i)
      document.getElementById("status").innerHTML = "Objetos detectados"
      fill("red");
      percent = floor(objetos[i].confidence * 100);
      
    }
  }
}