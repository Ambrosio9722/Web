// abrir nova janela comandos window
var janela1
function abrirJanela(){
   janela1 = window.open("https://www.google.com", "nova janela","width = 200px, height = 300px" )
}

function fecharJanela(){
   janela1.close();
}

// Screem  (largura e altura de tela)//
window.screen.availHeight() // altura do navegador sem contar a barra de ferramentas  
window.screen.availWidth() // largura do navegador sem contar a barra de ferramentas  

// Location (atributos da url atual)// 

window.location.href = "https://www.google.com" //coloca u url no lugar da atual 


// Timing // 
//(executar a ação apos um tempo) \\ milessegundos

//setTimeout  = faz a ação apos um tempo 
setTimeout(function(){}, 2000)//2 segundos

//setInterval = faz a ação a cada contagem de tempoS
setInterval((function(){}, 2000))