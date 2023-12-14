function festa(){

    document.body.style.backgroundImage = "url(/assets/cenario/festa.jpg)"
    document.getElementById("festar").style.display = "flex";
    document.getElementById("town").style.display = "none";
    document.getElementById("telaP").style.display = "none";
    document.getElementById("nomeUsuario").style.display = "none";
    document.getElementById("tempo-jogo").style.display="block";

    if(personagemSelecionado.energia<20){


         alert("Não tem energia para ir à festa")
         voltar()


    }
    else{
        
        alert("Você pagou 50 reais paraentrar na festa.")
        personagemSelecionado.dinheiro-=50  
    }
atualizarPerfil(personagemSelecionado)
}

function dancar(){

    if(personagemSelecionado){

        if(personagemSelecionado == programadora){

            alert("Você estava precisando de uma diversão e de se mexer um pouco!")
            personagemSelecionado.felicidade+=10
            personagemSelecionado.fome+=5
            personagemSelecionado.energia-=4
            personagemSelecionado.vida+=5
            }
        if(personagemSelecionado == atriz){

            alert("Atrizes adoram uma festa!")
            personagemSelecionado.felicidade +=12
            personagemSelecionado.fome+=8
            personagemSelecionado.energia-=6
            personagemSelecionado.vida+=8
            }
        if(personagemSelecionado == cozinheira){

            alert("Você adora festas!")
            personagemSelecionado.felicidade-=10
            personagemSelecionado.fome+=6
            personagemSelecionado.energia+=6
            personagemSelecionado.vida+=6
        }
        if(personagemSelecionado == paleontologa){

            alert("Você AMA festas")
            personagemSelecionado.felicidade-=15
            personagemSelecionado.fome+=10
            personagemSelecionado.energia+=7
            personagemSelecionado.vida+=6
        }
    }

atualizarPerfil(personagemSelecionado)

    }

    function beber(){

           document.getElementById("bebidas").style.display="flex"
           document.getElementById("festar").style.display = "none";

      
    }

    function bebida1(){


        if(personagemSelecionado){

               if(personagemSelecionado.dinheiro>=7){

                        alert("Compraste uma latinha de refrigerante, custou R$7")
                        personagemSelecionado.dinheiro-=7

               }
               else{

                    alert("Não tens dinheiro suficiente para comprar uma latinha de refrigerante")
                    

               }

        }
        atualizarPerfil(personagemSelecionado)
    }

    function bebida2(){

          if(personagemSelecionado){

                 if(personagemSelecionado.dinheiro>=15){

                            alert("Comprou uma lata de cerveja por R$15")
                            personagemSelecionado.dinheiro-=15
                            personagemSelecionado.felicidade+=5

                 }
                 else{


                             alert("Não tens dinheiro suficiente para comprar uma lata de cerveja")

                 }
          }
atualizarPerfil(personagemSelecionado)
    }

 function bebida3(){

             if(personagemSelecionado){

                  if(personagemSelecionado.dinheiro>=20){

                       alert("Compraste uma taça de vinho por R$20")
                       personagemSelecionado.dinheiro-=20
                       personagemSelecionado.felicidade+=10

                  }
                  else{

                       alert("Não tens dinheiro suficiente para comprar uma taça de vinho")

                  }

             }
atualizarPerfil(personagemSelecionado)
 }

 function bebida4(){

          if(personagemSelecionado){

               if(personagemSelecionado.dinheiro>=5){

                    alert("Comprou uma garrafinha d'água por R$5")
                    personagemSelecionado.dinheiro-=5
                    personagemSelecionado.felicidade+=3

               }
               else{

                    alert("Não tens R$5 para comprar uma garrafinha d'água") 

               }
        }
          atualizarPerfil(personagemSelecionado)
 }


    function mercado(){

        document.getElementById("tempo-jogo").style.display="block";
        document.getElementById("market").style.display = "flex";
        document.getElementById("town").style.display = "none";
        document.getElementById("telaP").style.display = "none";
        document.getElementById("nomeUsuario").style.display = "none"; //nomeg
}

function casa(){

    document.getElementById("tempo-jogo").style.display="block";
    document.body.style.backgroundImage = "url(/assets/cenario/casa.jpg)"
    document.querySelector("#dentroCasa").style.display = "flex"
    document.querySelector("#town").style.display = "none"
    document.querySelector("#telaP").style.display = "none"
    document.querySelector("#nomeUsuario").style.display = "none"
}

function quarto(){

    document.getElementById("tempo-jogo").style.display="block";
    document.getElementById("quartinho").style.display = "flex";
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

    document.getElementById("tempo-jogo").style.display="block";
    document.getElementById("Banheiroo").style.display = "flex";
    document.getElementById("dentroCasa").style.display = "none";
    document.getElementById("town").style.display = "none";
    document.getElementById("telaP").style.display = "none";
    document.getElementById("nomeUsuario").style.display = "none"; 

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