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