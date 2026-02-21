var numero1 = parseInt(prompt("Digite um numero:"))
var operacao = prompt("Digite a operacao: (soma) ou (sub)")
var numero2 = parseInt(prompt("Digite o  segundo numero: "))


function soma(n1,n2){
    var resultado = n1 + n2 
    document.write("resultado: "+ resultado)
}
function subtracao(n1,n2){
    var resultado = n1 - n2 
    document.write("resultado: "+ resultado)
}

if(operacao == "soma"){
    soma(numero1,numero2)
}
else if (operacao == "sub"){
 subtracao(numero1,numero2)
}
else{
    document.write("operação invalida!")
}