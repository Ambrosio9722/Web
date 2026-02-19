var nome = prompt("Qual o seu nome? ")
var altura = parseInt(prompt("Altura em cm: "))
var peso = parseFloat(prompt("Qual o seu peso?"))

var altura = altura / 100

var massa = peso / (altura * altura)

document.write(nome + " possui índice de massa corporal igual a"+massa+"sendo classificado como: ")