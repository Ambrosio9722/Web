//definindo referencias para elementos da página
var authForm = document.getElementById('authForm')
var authFormTitle = document.getElementById('authFormTitle')
var register = document.getElementById('register')
var access = document.getElementById('access')

var loading = document.getElementById('loading')

var auth = document.getElementById('auth')

var userContent = document.getElementById('userContent')

var userEmail = document.getElementById('userEmail')

var sendEmailVerificationDiv = document.getElementById('sendEmailVerificationDiv')
var emailVerified = document.getElementById('emailVerified')

var passwordReset = document.getElementById('passwordReset')

var userName = document.getElementById('userName')
var userImg = document.getElementById('userImg')

// Alterar o formulario de autenticação para o cadastro de novas contas

function toggleToRegister(){
    authForm.submitAuthForm.innerHTML = 'Cadastrar conta'
    authFormTitle.innerHTML = 'Acesse a sua conta para cadastrar'
    hideItem(register)// esconder atalho para cadastar conta
    hideItem(passwordReset)// esconder opção de redefinição de senha 
    showitem(access)// Mostrar atalho para acessar conta
}

// Alterar o formulario de autenticação para o acesso de contas ja existentes 

function toggleToAccess(){
    authForm.submitAuthForm.innerHTML = 'Acessar'
    authFormTitle.innerHTML = 'Acesse a sua conta para continuar'
    hideItem(access)// esconder atalho para acessar conta 
    showitem(passwordReset)// mostrar opção de redefinição de senha 
    showitem(register)// mostrar atalho para cadastrar conta
}

// Simplifica a exibição de elementos da página

function showitem(element){
  element.style.display = 'block'
}
// Simplifica a remoção de elementos da página

function hideItem(element){
  element.style.display = 'none'
}
// mostrar conteudo para usuarios altenticados
function showUserContent(user){
  console.log(user)
  if(user.providerData[0].providderId != 'password'){
      emailVerified.innerHTML = "Autenticação por provedor confiavel, não é necessário verificar e-mail"
      hideItem(sendEmailVerificationDiv)
  }else{
    if(user.emailVerified){
   emailVerified.innerHTML = "E-mail verificado"
   hideItem(sendEmailVerificationDiv)
  }else{
   emailVerified.innerHTML = "E-mail não verificado"
   showitem(sendEmailVerificationDiv)
  }
  }
  
  userImg.src = user.photoURL ? user.photoURL : 'img/unknownUser.png' // puchar imagem do google e colocar como foto de perfil 
  userName.innerHTML = user.displayName // adicionar o nome da conta do google 
  userEmail.innerHTML = user.email
  hideItem(auth)
  showitem(userContent)
}

// mostrar conteudo para usuarios não altenticados
function showAuth(){
  authForm.email.value = ""
  authForm.password.value = ""
  hideItem(userContent)
  showitem(auth)
}

//centralizar e traduzir erros
function showError(prefix, error){
  console.log(error.code)
  hideItem(loading)
  switch (key){
    case "auth/invalid-email": 
    case "auth/wrong-password": alert(prefix +" "+ 'E-mail ou senha inválidos')
    break;

    case "auth/weak-password": alert(prefix +" "+ 'Senha deve conter ao menos 6 caracteres')
    break;

    case "auth/e-mail-already-in-use": alert(prefix +" "+ 'E-mail já está em uso por outra conta')
    break;

    default: alert(prefix +"" + error.message)
  }
}

//atributos extras de configuração de e-mail
var actionCodeSettings ={
  url : 'https://todolist-495bf.firebaseapp.com'
}