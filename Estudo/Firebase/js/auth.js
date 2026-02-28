// Altenticação //

//mudar a linguagem do firebase (eltenticação)
firebase.auth().languageCode = 'pt-BR'
// função que trata a submissão do formulario de autenticação 
authForm.onsubmit = function (event){ // quando clicar nos btn
    showitem(loading)
    event.preventDefault() // nã odeixar redirecionar
    if(authForm.submitAuthForm.innerHTML == 'Acessar'){
          firebase.auth().signInWithEmailAndPassword(authForm.email.value, authForm.password.value).catch(function (error){
              console.log('Falha no acesso')
              console.log(error)
               hideItem(loading)
          })// acessar usando email e senha || enviar os campos do formualrio|| esperar a resposta do google
    }else{
            firebase.auth().createUserWithEmailAndPassword(authForm.email.value, authForm.password.value).catch(function (error){
              console.log('Falha no cadastro')
              console.log(error)
               hideItem(loading)
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