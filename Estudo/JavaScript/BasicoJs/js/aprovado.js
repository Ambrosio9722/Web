alert("Media!")

var nota1= Number(prompt("Nota1: "))
var nota2= Number(prompt("Nota2: "))
var nota3= Number(prompt("Nota3: "))
var media = 60

var idade = parseFloat(prompt("Qual a sua idade: "))

var notaFinal = nota1 + nota2 + nota3 
document.write(notaFinal)
if(notaFinal >= media){
 document.write(" Passou!")
}
else if (notaFinal < media && notaFinal >= 40){
  document.write("Recuperação!")
}
else{
    document.write("Reprovou!")
}

var resultadoIdade = (idade>=0 && idade<15) ? "criança" : "adulto"
document.write(resultadoIdade)