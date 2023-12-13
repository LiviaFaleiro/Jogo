function mercado(){

    document.getElementById("market").style.display = "block";
    document.getElementById("town").style.display = "none";
    document.getElementById("telaP").style.display = "none";
    document.getElementById("nomeUsuario").style.display = "none"; 

}
var hamburguer1 = 0

function comida1(){

    if(personagemSelecionado){

        if(personagemSelecionado.dinheiro >=15){

            alert("voce comprou um hamburguer de R$25! está no seu inventário")
            personagemSelecionado.dinheiro-=25
            hamburguer1++
        }
        
        else{

            alert("voce não pode comprar hamburguer pois não tens R$15. Trabalhe mais")
        }
    }
atualizarPerfil(personagemSelecionado)
 }


function comida2(){


    if(personagemSelecionado){

        if(personagemSelecionado.dinheiro >=10){
  
            alert("você comprou uma salada de R$10! Está no seu inventário, quando precisar pode comê-lo")
            personagemSelecionado.dinheiro-=10
            

        }
        
        else{

            alert("você não tem R$10 para comprar uma salada.Trabalhe mais")

        }
    }
atualizarPerfil(personagemSelecionado)

}

function comida3(){

    if(personagemSelecionado){
        if(personagemSelecionado.dinheiro >=20){

            alert("você comprou uma fatia de bolo por R$20, está no seu inventário, quando precisar/querer, pode comer")
            personagemSelecionado.dinheiro-=20

        }

        else{

            alert("você não tem dinheiro suficiente para comprar a fatia de bolo de R$20. Trabalhe.")
        }
    }
atualizarPerfil(personagemSelecionado)  

}