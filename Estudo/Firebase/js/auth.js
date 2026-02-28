authForm.onsubmit = function (event){ // quando clicar nos btn
    event.preventDefault() // nã odeixar redirecionar

    if(authForm.submitAuthForm.innerHTML == 'Acessar'){
          firebase.auth().signInWithEmailAndPassword(authForm.email.value, authForm.password.value).then(function(user){
            console.log('Acessou com sucesso')
            console.log(user)
          }).catch(function (error){
              console.log('Falha no acesso')
              console.log(error)
          })// acessar usando email e senha || enviar os campos do formualrio|| esperar a resposta do google
    }else{
            firebase.auth().createUserWithEmailAndPassword(authForm.email.value, authForm.password.value).then(function(user){
            console.log('Cadastrou com sucesso')
            console.log(user)
          }).catch(function (error){
              console.log('Falha no cadastro')
              console.log(error)
          })// criar um email e senha 
    }
}

