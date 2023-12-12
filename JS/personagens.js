const personagem = function(){

    this.vida = 100;
    this.felicidade = 100;
    this.fome = 100;
    this.inteligencia = 0;
    this.energia = 100;
    this.dinheiro = 10000;
    this.descricao = "Alguma coisa";
    }

    let programadora = new personagem();

    programadora.vida = 30;
    programadora.felicidade = 20;
    programadora.fome = 0;
    programadora.inteligencia = 70;
    programadora.energia = 30;
    programadora.dinheiro = 150;
    programadora.descricao = "Possui mais dinheiro que os outros";

    let atriz = new personagem();

    atriz.vida = 50;
    atriz.felicidade = 60;
    atriz.fome = 30;
    atriz.inteligencia = 40;
    atriz.energia = 70;
    atriz.dinheiro = 60;
    atriz.descricao = "Possui mais energia e ganha atributos de felicidade mais fácil";

    let cozinheira = new personagem();
    cozinheira.vida = 60;
    cozinheira.felicidade = 75;
    cozinheira.fome = 35;
    cozinheira.inteligencia = 55;
    cozinheira.energia = 65;
    cozinheira.dinheiro = 70;
    cozinheira.descricao = "Quando come, diminui mais a fome pois sabe cozinhar :)";

    let paleontologa = new personagem();

    paleontologa.vida = 50;
    paleontologa.felicidade = 80;
    paleontologa.fome = 30;
    paleontologa.inteligencia = 65;
    paleontologa.energia = 65;
    paleontologa.dinheiro = 75;
    paleontologa.descricao = "Mais feliz. Menos chances de morrer de depressão";

let nomePersonagem;
let generoPersonagem;
let personagemSelecionado;

function vida(){

    const intervalID = setInterval(alteraPersonagem, 10000);

            function alteraPersonagem() {
                personagemSelecionado.energia-=1;
                atualizarPerfil(personagemSelecionado);
            }

        }
    
function capitalismo(){

  const IntervalID = setInterval(alteraPersonagem, 30000)

             function alteraPersonagem(){

                     personagemSelecionado.felicidade-=5
                     atualizarPerfil(personagemSelecionado)
                     alert("O capitalismo suga nossa alegria, perdeu 5 de felicidade")
              

             }
}


function telap(personagem) { //tela Perfil

    


    document.getElementById("description-attribute-vida").innerHTML = personagem.vida;
    document.getElementById("description-attribute-felicidade").innerHTML = personagem.felicidade;
    document.getElementById("description-attribute-fome").innerHTML = personagem.fome;
    document.getElementById("description-attribute-inteligencia").innerHTML = personagem.inteligencia;
    document.getElementById("description-attribute-energia").innerHTML = personagem.energia;
    document.getElementById("description-attribute-dinheiro").innerHTML = personagem.dinheiro;
    document.getElementById("description-attribute-descricao").innerHTML = personagem.descricao;
    document.getElementById("perfilVida").innerText = "Vida: " + personagem.vida;
    document.getElementById("perfilEnergia").innerText = "Energia: " + personagem.energia;
    document.getElementById("perfilFelicidade").innerText = "Felicidade: " + personagem.felicidade;
    document.getElementById("perfilFome").innerText = "Fome: " + personagem.fome;
    document.getElementById("perfilInteligencia").innerText = "Inteligência: " + personagem.inteligencia;
    document.getElementById("perfilDinheiro").innerText = "Dinheiro: " + personagem.dinheiro;
    
    personagemSelecionado = personagem;
    vida()
    capitalismo()
        
}
    function nome(){

        document.body.style.backgroundImage = "url(/assets/cenario/telaLogin.jpg)"; 
        document.getElementById("nomeUsuario").style.display = "block"; //era nomeg
        document.getElementById("telaP").style.display = "none";
        document.getElementById("nomeUsuario").style.display = "flex";
        document.querySelector("#column").style.display = "flex"
        
        }
    
        function gen(genero) {
        nomePersonagem = document.getElementById("nomeG").value;
        generoPersonagem = genero;
        document.getElementById("town").style.display = "flex";
        document.getElementById("telaP").style.display = "none";
        document.getElementById("nomeUsuario").style.display = "none";
        document.getElementById("perfilButton").style.display = "inline";
        }
    
            function atualizarPerfil(personagem) {
                
                document.getElementById("perfilVida").innerText = "Vida: " + personagem.vida;
                document.getElementById("perfilEnergia").innerText = "Energia: " + personagem.energia;
                document.getElementById("perfilFelicidade").innerText = "Felicidade: " + personagem.felicidade;
                document.getElementById("perfilFome").innerText = "Fome: " + personagem.fome;
                document.getElementById("perfilInteligencia").innerText = "Inteligência: " + personagem.inteligencia;
                document.getElementById("perfilDinheiro").innerText = "Dinheiro: " + personagem.dinheiro;
                
                if(personagemSelecionado.energia <=0 || personagemSelecionado.felicidade <=0){

                          document.location = "https://www.orkut.com/index_pt.html"
                           alert("Você morreu igual o Orkut")

                }
        }