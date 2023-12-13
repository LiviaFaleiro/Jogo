function festa(){

    document.body.style.backgroundImage = "url(/assets/cenario/festa.jpg)"
    document.getElementById("festar").style.display = "block";
    document.getElementById("town").style.display = "none";
    document.getElementById("telaP").style.display = "none";
    document.getElementById("nomeUsuario").style.display = "none";
    }


    function mercado(){

        document.getElementById("market").style.display = "block";
        document.getElementById("town").style.display = "none";
        document.getElementById("telaP").style.display = "none";
        document.getElementById("nomeUsuario").style.display = "none"; //nomeg
}

function casa(){

    document.body.style.backgroundImage = "url(/assets/cenario/casa.jpg)"
    document.querySelector("#dentroCasa").style.display = "block"
    document.querySelector("#town").style.display = "none"
    document.querySelector("#telaP").style.display = "none"
    document.querySelector("#nomeUsuario").style.display = "none"
}

function quarto(){


    document.getElementById("quartinho").style.display = "block";
    document.getElementById("dentroCasa").style.display = "none";
    document.getElementById("town").style.display = "none";
    document.getElementById("telaP").style.display = "none";
    document.getElementById("nomeUsuario").style.display = "none"; 

}

function mimir(){

         if(personagemSelecionado){

            if(personagemSelecionado.energia <=20){

               alert("Dormiu e recuperou 10 de energia")
               personagemSelecionado.energia+=10

            }
            else{

                alert("Não está com sono")
            }
         }
atualizarPerfil(personagemSelecionado)

}

function banheiro(){

    document.getElementById("Banheiroo").style.display = "block";
    document.getElementById("dentroCasa").style.display = "none";
    document.getElementById("town").style.display = "none";
    document.getElementById("telaP").style.display = "none";
    document.getElementById("nomeUsuario").style.display = "none"; //nomeg

}
function banhar(){

if(personagemSelecionado){

    if(personagemSelecionado == atriz){

             alert("Você ganhou 5 pontos de felicidade, afinal, um banho sempre nos deixa melhor!!")
             personagemSelecionado.felicidade+=5
         

    }
    else if(personagemSelecionado == programadora){

             alert("após um dia nessa vida triste, um banho sempre nos deixa um pouco mais feliz. Voçê ganhou mais 1 ponto de felicidade")
             personagemSelecionado.felicidade+=1

    }
    else if(personagemSelecionado == paleontologa){

            alert("Um banho sempre é bom.")
            personagemSelecionado.felicidade+=0

    }
    else if(personagemSelecionado == cozinheira){


            alert("Um banho parece sempre ser uma boa ideia. Você adora um banho e fica mais feliz com isso. Ganhou +1 ponto de felicidade")
            personagemSelecionado.felicidade+=1

    }

}
atualizarPerfil(personagemSelecionado)
}

function escovar(){

          if(personagemSelecionado){

              alert("é sempre bom escovar os dentes")
              personagemSelecionado.energia-=1

          }
atualizarPerfil(personagemSelecionado)
}

function rosto(){

       if(personagemSelecionado){

          if(personagemSelecionado.energia <=3 ){


                 alert("Não tens energia para lavar o rosto, vá dormir.")

          }
        else{

                 alert("Lavastes o rosto mas perdeu 2 de energia")
                 personagemSelecionado.energia-=2

        }
       }
atualizarPerfil(personagemSelecionado)
}





