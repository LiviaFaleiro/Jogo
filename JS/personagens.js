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

    programadora.vida = 100;
    programadora.felicidade = 100;
    programadora.fome = 100;
    programadora.inteligencia = 0;
    programadora.energia = 100;
    programadora.dinheiro = 50;
    programadora.descricao = "Ele paga menos por remedios";

    let atriz = new personagem();

    atriz.vida = 100;
    atriz.felicidade = 10;
    atriz.fome = 100;
    atriz.inteligencia = 0;
    atriz.energia = 100;
    atriz.dinheiro = 50;
    atriz.descricao = "Ele perde menos energia quando vai trabalhar";

    let cozinheira = new personagem();
    cozinheira.vida = 100;
    cozinheira.felicidade = 100;
    cozinheira.fome = 100;
    cozinheira.inteligencia = 0;
    cozinheira.energia = 100;
    cozinheira.dinheiro = 50;
    cozinheira.descricao = "Ele ganha mais pontos de fome ao comer";

    let paleontologa = new personagem();

    paleontologa.vida = 2;
    paleontologa.felicidade = 100;
    paleontologa.fome = 100;
    paleontologa.inteligencia = 10;
    paleontologa.energia = 100;
    paleontologa.dinheiro = 30;
    paleontologa.descricao = "Ele aprende mais rapido";

let nomePersonagem;
let generoPersonagem;
let personagemSelecionado;

function telap(personagem) {

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
    atualizarPerfil();
        
}
    function nome(){

        document.getElementById("nomeUsuario").style.display = "block"; //era nomeg
        document.getElementById("telaP").style.display = "none";

        }
    
        function casa(genero) {
        nomePersonagem = document.getElementById("nomeG").value;
        generoPersonagem = genero;
        document.getElementById("cidade").style.display = "block";
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
                document.getElementById("perfilSaude").innerText = "Saude: " + personagem.saude;
        }