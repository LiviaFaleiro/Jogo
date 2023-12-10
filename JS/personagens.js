const personagem = function(){

    this.vida = 100;
    this.felicidade = 100;
    this.fome = 100;
    this.inteligencia = 0;
    this.energia = 100;
    this.dinheiro = 10000;
    this.discrição = "Alguma coisa";
    }

    let programadora = new personagem();

    programadora.vida = 100;
    programadora.felicidade = 100;
    programadora.fome = 100;
    programadora.inteligencia = 0;
    programadora.energia = 100;
    programadora.dinheiro = 50;
    programadora.discrição = "Ele paga menos por remedios";

    let atriz = new personagem();

    atriz.vida = 100;
    atriz.felicidade = 10;
    atriz.fome = 100;
    atriz.inteligencia = 0;
    atriz.energia = 100;
    atriz.dinheiro = 50;
    atriz.discrição = "Ele perde menos energia quando vai trabalhar";

    let cozinheira = new personagem();
    cozinheira.vida = 100;
    cozinheira.felicidade = 100;
    cozinheira.fome = 100;
    cozinheira.inteligencia = 0;
    cozinheira.energia = 100;
    cozinheira.dinheiro = 50;
    cozinheira.discrição = "Ele ganha mais pontos de fome ao comer";

    let paleontologa = new personagem();

    paleontologa.vida = 2;
    paleontologa.felicidade = 100;
    paleontologa.fome = 100;
    paleontologa.inteligencia = 10;
    paleontologa.energia = 100;
    paleontologa.dinheiro = 30;
    paleontologa.discrição = "Ele aprende mais rapido";

let nomePersonagem;
let generoPersonagem;
let personagemSelecionado;

function telap(personagem) {
    document.getElementById("vida").innerHTML = personagem.vida;
    document.getElementById("felicidade").innerHTML = personagem.felicidade;
    document.getElementById("fome").innerHTML = personagem.fome;
    document.getElementById("inteligencia").innerHTML = personagem.inteligencia;
    document.getElementById("energia").innerHTML = personagem.energia;
    document.getElementById("discrição").innerHTML = personagem.discrição;
    document.getElementById("perfilVida").innerText = "Vida: " + personagem.vida;
    document.getElementById("perfilEnergia").innerText = "Energia: " + personagem.energia;
    document.getElementById("perfilFelicidade").innerText = "Felicidade: " + personagem.felicidade;
    document.getElementById("perfilFome").innerText = "Fome: " + personagem.fome;

    document.getElementById("perfilInteligencia").innerText = "Inteligência: " + personagem.inteligencia;
    document.getElementById("perfilDinheiro").innerText = "Dinheiro: " + personagem.dinheiro;
    
    personagemSelecionado = personagem;
    atualizarPerfil();
        
}
    function nome(){

        document.getElementById("nomeg").style.display = "block";
        document.getElementById("telaP").style.display = "none";
        }
    
        function casa(genero) {
        nomePersonagem = document.getElementById("nomeG").value;
        generoPersonagem = genero;
        document.getElementById("cidade").style.display = "block";
        document.getElementById("telaP").style.display = "none";
        document.getElementById("nomeg").style.display = "none";
        document.getElementById("perfilButton").style.display = "inline";
        }


     
    
            function atualizarPerfil(personagem) {
                document.getElementById("perfilVida").innerText = "Vida: "
                + personagem.vida;
                document.getElementById("perfilEnergia").innerText = "Energia: " + personagem.energia;
                document.getElementById("perfilFelicidade").innerText =
                "Felicidade: " + personagem.felicidade;
                document.getElementById("perfilFome").innerText = "Fome: " + personagem.fome;
                document.getElementById("perfilInteligencia").innerText =
                "Inteligência: " + personagem.inteligencia;
                document.getElementById("perfilDinheiro").innerText =
                "Dinheiro: " + personagem.dinheiro;
                document.getElementById("perfilSaude").innerText = "Saude: " + personagem.saude;
        }

        function mercado(){

            document.getElementById("market").style.display = "block";
            document.getElementById("cidade").style.display = "none";
            document.getElementById("telaP").style.display = "none";
            document.getElementById("nomeg").style.display = "none";

            mostrarPerfil();
            
            }

        

      
        