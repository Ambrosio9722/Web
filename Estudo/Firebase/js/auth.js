// Altenticação //

//mudar a linguagem do firebase (eltenticação)
firebase.auth().languageCode = 'pt-BR'
// função que trata a submissão do formulario de autenticação 
authForm.onsubmit = function (event){ // quando clicar nos btn
    showitem(loading)
    event.preventDefault() // nã odeixar redirecionar
    if(authForm.submitAuthForm.innerHTML == 'Acessar'){
          firebase.auth().signInWithEmailAndPassword(authForm.email.value, authForm.password.value).catch(function (error){
               showError('Falha no acesso: ', error)
          })// acessar usando email e senha || enviar os campos do formualrio|| esperar a resposta do google
    }else{
            firebase.auth().createUserWithEmailAndPassword(authForm.email.value, authForm.password.value).catch(function (error){
              showError('Falha no cadastro: ', error)
          })// criar um email e senha 
    }
}

//funçã que centraliza e trata a autenticação 
firebase.auth().onAuthStateChanged(function (user){//quando ouver uma mudança na altenticação 
    hideItem(loading)
    if(user){ // user retorna se esta autenticado ou nn (null)
        showUserContent(user)
    }else{
        showAuth()
    }
})
// sair da conta 
function signOut(){
firebase.auth().signOut().catch(function (error){
            console.log('Falha ao sair da conta')
            console.log(error)
})}


// função que permite ao ususario fazer a verificação do e-mail 
function sendEmailVerification(){
    showitem(loading)
    var user = firebase.auth().currentUser // pegar o usuario atual
    user.sendEmailVerification(actionCodeSettings).then(function(){ //then = se der certo
       alert('E-mail de verificação foi enviado para '+ user.email+ '! Verifique a sua caixa de entrada')
    }).catch(function(error){ // se der erro
        alert('houve um erro ao enviar o e-mail de verificação')
        console.log(error)
    }).finally(function(){
        hideItem(loading)
    })
}

//função que permite o usuario redefinir a senha dele

function sendPasswordResetEmail(){
    var email = prompt('Redefinir senha! informe o seu endereço de e-mail.', authForm.email.value)
    if(email){
       showitem(loading)
       firebase.auth().sendPasswordResetEmail(email, actionCodeSettings).then(function(){
        alert('E-mail de redefinição de senha foi enviado para '+ email+".")
       }).catch(function (error){
        alert('Houve um erro ao enviar e-mail de redefinição de senha!')
        console.log(error)
       }).finally(function(){
        hideItem(loading)
       })
    }else{
       alert('É preciso preencher o campo de e-mail para redefinir a senha!')
    }
}

// Função que permite a autenticação pelo Google 
function signInWithGoogle(){
    showitem(loading)
    firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider()).catch(function (error){
        alert('Houve um erro ao autenticar usando o Google')
        console.log(error)
        hideItem(loading)
    })
}

// Função que permite a autenticação pelo Github
function signInWithGithub(){
    showitem(loading)
    firebase.auth().signInWithPopup(new firebase.auth.GithubAuthProvider()).catch(function (error){
        alert('Houve um erro ao autenticar usando o Github')
        console.log(error)
        hideItem(loading)
    })
}

// Função que permite a autenticação pelo Facebook
function signInWithFacebook(){
    showitem(loading)
    firebase.auth().signInWithPopup(new firebase.auth.FacebookAuthProvider()).catch(function (error){
        alert('Houve um erro ao autenticar usando o Facebook')
        console.log(error)
        hideItem(loading)
    })
}

// função que permite atualizar nomes de ususario 
function updateUserName(){
    var newUserName = prompt('Informe um novo nome de usuário. ', userName.innerHTML)
    if(newUserName && newUserName != ''){
    userName.innerHTML = newUserName
    showitem(loading)
    firebase.auth().currentUser.updateProfile({
        displayName: newUserName
    }).catch(function(error){
    alert('houve um erro ao atúalizar o nome de usuário')
    console.log(error)
    }).finally(function(){
        hideItem(loading)
    })
    }else{
        alert('O nome de usuário não pode ser vazio')
    }
}

//Função que permite remover contas de usuario 
function deleteUserAccount(){
var confirmation = confirm('Realmente deseja excluir a sua conta?')
if(confirmation){
    showitem(loading)
firebase.auth().currentUser.delete().then(function(){
    alert('conta foi removida com sucesso')
}).catch(function(error){
    alert('Houve um erro ao remover a sua conta de usuário ')
    console.log(error)
}).finally(function(){
    hideItem(loading)
})
}
}