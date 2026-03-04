// trata a submissão do formulario de tarefas
todoForm.onsubmit = function (event){
    event.preventDefaut() // evita o redirecionamento da pagina
    if(todoForm.name.value != ''){
      var data = {
        name: todoForm.name.value
      }
      dbRefUsers.child(firebase.auth().currentUser.uid).push(data).then(function (){
        console.log('Tarefa '+data.name+'adicionada com sucesso')
      })
    }else{
        alert('O nome da tarefa não pode ser em branco para criar a tarefa')
    }
}