var objetos = Array('Cadeira', 'Impressora', 'Garfo')

function adicionar(){
 
  var texto = document.getElementById("texto").value
  console.log(texto)
  if(texto == ""){
   alert("Informe um valor válido!")
  }
  else{
  
   var compara = objetos.indexOf(texto) 
   console.log(compara)
     if(compara !== -1){
        alert( "Objeto já foi adicionado")
     }
     else{
        objetos.push(texto)
        console.log(objetos)
        document.getElementById("texto").value = ""
     }
  }
}

function ordenar(){
    objetos.sort()
    console.log(objetos)
}