    //STRING
var nome = "Antonio"

// NUMBER
var numero = 15
var numero2 = 12.34

// BOLEAN
var ativado = true;

alert(numero2) //abrir um dialog
document.write(numero2)// escrever na tela
console.log(numero2)

//--------CONCATENAÇÃO------------

var nomeTitulo = "Maria"
var idadeTitulo = prompt("qual a sua idade: ")
document.write("<h1>Ola " +nomeTitulo+ " como vai, idade:  </h1>" +idadeTitulo)

//--------Null e Underfined ------------
// Null = ausencia intencial de valor
var teste = null
// undefined = a variavel nã opossiu nenhum valor
var teste2
var teste3 = undefined


var a = 10
var b = 20
var c = null
document.write(a)
document.write(b)
document.write(c)

c = a
a = b
b = c

document.write(a)
document.write(b)
document.write(c)

if(5 == "5"){
 document.write("entrou no if")
}
else{
document.write("entrou no else")
}