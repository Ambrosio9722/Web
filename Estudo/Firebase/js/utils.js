//definindo referencias para elementos da página
var authForm = document.getElementById('authForm')
var authFormTitle = document.getElementById('authFormTitle')
var register = document.getElementById('register')
var access= document.getElementById('access')

var loading= document.getElementById('loading')
// Alterar o formulario de autenticação para o cadastro de novas contas

function toggleToRegister(){
    authForm.submitAuthForm.innerHTML = 'Cadastrar conta'
    authFormTitle.innerHTML = 'Acesse a sua conta para cadastrar'
    hideItem(register)
    showitem(access)
}

// Alterar o formulario de autenticação para o acesso de contas ja existentes 

function toggleToAccess(){
    authForm.submitAuthForm.innerHTML = 'Acessar'
    authFormTitle.innerHTML = 'Acesse a sua conta para continuar'
    hideItem(access)
    showitem(register)
}

// Simplifica a exibição de elementos da página

function showitem(element){
  element.style.display = 'block'
}
// Simplifica a remoção de elementos da página

function hideItem(element){
  element.style.display = 'none'
}
