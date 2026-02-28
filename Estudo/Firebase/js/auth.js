// Altenticação //

// função que trata a submissão do formulario de autenticação 
authForm.onsubmit = function (event){ // quando clicar nos btn
    showitem(loading)
    event.preventDefault() // nã odeixar redirecionar
    if(authForm.submitAuthForm.innerHTML == 'Acessar'){
          firebase.auth().signInWithEmailAndPassword(authForm.email.value, authForm.password.value).catch(function (error){
              console.log('Falha no acesso')
              console.log(error)
          })// acessar usando email e senha || enviar os campos do formualrio|| esperar a resposta do google
    }else{
            firebase.auth().createUserWithEmailAndPassword(authForm.email.value, authForm.password.value).catch(function (error){
              console.log('Falha no cadastro')
              console.log(error)
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
