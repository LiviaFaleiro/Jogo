
function trabalhar(){

    document.getElementById("trabalho").style.display = "block";
    document.getElementById("town").style.display = "none";
    document.getElementById("telaP").style.display = "none";
    document.getElementById("nomeUsuario").style.display = "none"; //nomeg

if(personagemSelecionado){

        if(personagemSelecionado = programadora){

            //laboratório de informática
            alert("Você trabalhou e por isso ganhou 50 reais mas perdeu 5 pontos de vida")
            personagemSelecionado.vida-=5
            personagemSelecionado.inteligencia+=5
            personagemSelecionado.dinheiro+=50
        }
        else if(personagemSelecionado = atriz){

            //estudio
            alert("Você passou horas trabalhando em um dos estúdios da Globo, ganhou 25 reais mas perdeu 10 pontos de energia")
            personagemSelecionado.energia-=10
            personagemSelecionado.dinheiro+= 40

        }
        else if(personagemSelecionado = cozinheira){

             //cozinha
             alert("Após ficar horas trabalhando em uma cozinha, você ganhou 35 reais, mas perdeu 15 pontos de energia")
             personagemSelecionado.energia-=15 

        }
        else if(personagemSelecionado = paleontologa){
             //labBiologia
             
             alert("É dificil achar e mexer com fósseis, você ganhou 35 reais mas perdeu 2 pontos de energia")
             personagemSelecionado.dinheiro+= 40
             personagemSelecionado.energia-=2


        }


}
atualizarPerfil(personagemSelecionado)
}

