// CONVERTER VALORES //
parseInt( ) // converte a variavael para inteiro
parseFloat()// converte a variavel para o tipo float
.toString() // converte uma variavel para o tipo string

// OPERADORES LÓGICOS // 

//E = %%
//OU = ||
//NEGAÇÃO = !

// SWITCH // 

switch (condicao){

    case 1:
            // se condição for === 1 
    break

    case 2:
            // se condição for === 1 
    break

    default:

}

// FUNÇOES //

function aprenderFuncoes(valor1, valor2){

}
// chamar a função //
aprenderFuncoes(21,34)


// FUNÇÕES ANONIMAS // 

var funcaoAnonima = function(){
        var soma = 10 + 10 
}

// CHAMAR FUNÇÕES ANONIMAS // 
funcaoAnonima()

// FUNÇÕES DE CALLBACK//
// uma função que é passada como argumento para outra função e é executada apos um evento ou condição espeficica ser atendida
function exibirArtigo(id, callbackSusseso, callbackErro){
        //Logica: recuperar id via requisição https, 
        if(true){
             callbackSusseso("Artigo dos navios","O artigo foi carregado .....")
        }
        else{
                callbackErro("erro ao recuperar os dados")
        }
}
//CHAMAR A FUNÇÃO DE CALLBACK//
var callbackSusseso = function(tirulo, descrição){
        //////Msotra titulo e descrição
}
var callbackErro = function(erro){
       ///////Mostra mensagem de erro
}

exibirArtigo(1,callbackSusseso,callbackErro)

//==== FUNÇOES NATIVAS PARA STRINGS =====//

//propriedade length = quantidade de caracteres de uma string
//charAt() = retorna o caractere em uma posição especifica
//indexOf() = retorna a posição da primeira ocorrencia de um caractere 
//repalce() = substituir uma cadeia de caracteres (palavra) por outro
//substr() = extrai uma parte de uma string, com base em um indice inicial e um comprimento
//toUpperCase() = converte uma string para letras maiusculas
//tolowerCase() = converte uma string para Letras minusculas
//trim() = remove os espaços em branco do inicio e do fim de uma string
//EXEMPLO = variavel.replace() 