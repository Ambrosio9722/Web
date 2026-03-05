// Trata a submissão do formulário de autenticação
todoForm.onsubmit = function (event) {
  event.preventDefault() // Evita o redirecionamento da página
  if (todoForm.name.value != '') {
    var data = {
      name: todoForm.name.value
    }

    dbRefUsers.child(firebase.auth().currentUser.uid).push(data).then(function () {
      console.log('Tarefa "' + data.name + '" adicionada com sucesso')
    }).catch(function(error){
      showError('Falha ao adicionar tarefa: ', error)
    })
  } else {
    alert('O nome da tarefa não pode ser em branco para criar a tarefa!')
  }
}

// exibe a lista de tarefas do usuário 
function fillTodoList(dataSnapshot){
 ulTodoList.ineerHTML = ''
 var num = dataSnapshot.numChildren()
 todoCount.ineerHTML = num + (num >1 ? ' tarefas' : 'tarefa') + ':' // exibe na interface o numero de tarefas
 dataSnapshot.forEach(function (item){ // percorre todos os elementos 
    var value = item.val()
    var li = document.createElement('li') // criar um elemento do tipo li
    var spanLi = document.createElement('span')// criar um elemento do tipo span
    spanLi.appendChild(document.createTextNode(value.name))// Adiciona o elemento de texto dentro da nossa span
    li.appendChild(spanLi)//adiciona o span dentro do Li
    ulTodoList.appendChild(li)// adiciona o li dentro da lista de tarefas
 })
}