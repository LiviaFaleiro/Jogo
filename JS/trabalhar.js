
function trabalhar(){
    document.getElementById("trabalho").style.display = "block";
    document.getElementById("town").style.display = "none";
    document.getElementById("telaP").style.display = "none";
    document.getElementById("nomeUsuario").style.display = "none"; //nomeg

if(personagemSelecionado){

       if (personagemSelecionado == programadora){

            //laboratório de informática

            document.getElementById("col2").style.display = "block"
            document.getElementById("trabP").style.display = "block"
            document.body.style.backgroundImage = "url(/assets/cenario/informatica.png)"

            
        }
       else if(personagemSelecionado == atriz){

          document.getElementById("col3").style.display = "block"          
          document.getElementById("trabA").style.display = "block"
          document.body.style.backgroundImage = "url(/assets/cenario/teatro.jpg)"

        }
        else if(personagemSelecionado == cozinheira){

             //cozinha
             document.getElementById("trabC").style.display = "block"
             document.getElementById("col4").style.display = "block"
             document.body.style.backgroundImage = "url(/assets/cenario/restaurante.jpg)"
     
        }
        else if(personagemSelecionado == paleontologa){
             //labBiologia
             document.getElementById("trabPa").style.display = "block"
             document.getElementById("col1").style.display = "block"
             document.body.style.backgroundImage = "url(/assets/cenario/ciencias.jpg)"
        }

}
}

function programadoraT(){

personagemSelecionado.vida-=5
personagemSelecionado.inteligencia+=5
personagemSelecionado.felicidade-=4
personagemSelecionado.dinheiro+=50
personagemSelecionado.fome+=10

     atualizarPerfil(personagemSelecionado)
}

function paleontologaP(){

     
personagemSelecionado.dinheiro+= 40
personagemSelecionado.energia-=2
personagemSelecionado.fome+=10
personagemSelecionado.felicidade-=2

     atualizarPerfil(personagemSelecionado)

}

function atrizT(){

personagemSelecionado.energia-=10
personagemSelecionado.dinheiro+= 40
personagemSelecionado.fome+=15
personagemSelecionado.felicidade-=2

     atualizarPerfil(personagemSelecionado)
}

function cozinheiraT(){

personagemSelecionado.energia-=15 
personagemSelecionado.dinheiro+=35
personagemSelecionado.fome+=25
personagemSelecionado.felicidade-=4

 
     atualizarPerfil(personagemSelecionado)

}

if(personagemSelecionado){

     if(personagemSelecionado.fome>=30){

          alert("Você está ficando com fome!! vá comer")
  }
  if(personagemSelecionado.energia<=20){
  
         alert("Vá dormir, estás cansado(a). Se cuide senão vai morrer")
  }
  
  if(personagemSelecionado.dinheiro<=0){
  
        alert("O capitalismo sugou tudo que você tinha, trabalhe mais...para conseguir um pouco de dinheiro")
  
  }

}
