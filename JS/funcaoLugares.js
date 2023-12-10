

function festa(){

    document.getElementById("festar").style.display = "block";
    document.getElementById("cidade").style.display = "none";
    document.getElementById("telaP").style.display = "none";
    document.getElementById("nomeUsuario").style.display = "none";

    mostrarPerfil();
    }


    function mercado(){

        document.getElementById("market").style.display = "block";
        document.getElementById("cidade").style.display = "none";
        document.getElementById("telaP").style.display = "none";
        document.getElementById("nomeUsuario").style.display = "none"; //nomeg

        mostrarPerfil();

}

let trabalhoescolhido

function trabalhar(){

    document.getElementById("trabalho").style.display = "block";
    document.getElementById("cidade").style.display = "none";
    document.getElementById("telaP").style.display = "none";
    document.getElementById("nomeUsuario").style.display = "none"; //nomeg




}
function comida1(){

    if(personagemSelecionado){

        if(personagemSelecionado.dinheiro >=15){

            alert("voce comprou um hamburguer de R$25! está no seu inventário")
            personagemSelecionado.dinheiro-=25

        }
        
        else{

            alert("voce não pode comprar hamburguer pois não tens R$15")
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

            alert("você não tem R$10 para comprar uma salada.")

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

            alert("você não tem dinheiro suficiente para comprar a fatia de bolo de R$20")
        }
    }
atualizarPerfil(personagemSelecionado)  

}
