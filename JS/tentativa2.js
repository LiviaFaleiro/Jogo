const Personagem = function(){
            
    this.vida = 100;
    this.felicidade = 100;
    this.fome = 100;
    this.saude = 100;
    this.inteligencia = 0;
    this.energia = 100;
    this.dinheiro = 10000;
    this.imagem = "assets/pg1.jpg"
    this.descricao = "Alguma coisa"

}

let Programadora = new Personagem();

Programadora.vida = 10;
Programadora.saude = 49;
Programadora.inteligencia = 10;
Programadora.energia = 100
Programadora.fome = 0;
Programadora.felicidade = 5;
Programadora.imagem = "assets/programadora.png"
Programadora.descricao = "Tem mais dinheiro mas menos (MUITO MENOS) felicidade";

let Atriz = new Personagem();
Atriz.felicidade = 10;
Atriz.vida = 2;
Atriz.saude = 49;
Atriz.inteligencia = 10;
Atriz.energia = 40;
Atriz.fome = 30;
Atriz.felicidade = 20;
Atriz.imagem = "assets/atriz.png"
Atriz.descricao = "Tem pouco dinheiro mas mais disposição";

let Cozinheira = new Personagem();
Cozinheira.felicidade = 10;
Cozinheira.vida = 2;
Cozinheira.saude = 49;
Cozinheira.inteligencia = 10;
Cozinheira.felicidade = 30
Cozinheira.energia = 50
Cozinheira.fome = 20;
Cozinheira.imagem = "assets/cozinheira.png"
Cozinheira.descricao = "Ganha mais pontos de fome ao comer e tem mais fome";

let Paleontologa = new Personagem();
Paleontologa.vida = 2;
Paleontologa.saude = 49;
Paleontologa.inteligencia = 10;
Paleontologa.felicidade = 20
Paleontologa.fome = 20;
Paleontologa.energia = 20
Paleontologa.imagem = "assets/paleontologa.png"
Paleontologa.descricao = "Mais sujo porém possui mais energia";

let PersonagemSelecionado = Personagem


function telaP(Personagem) {
    
    document.getElementById("vida").innerText = PersonagemSelecionado.vida;
    document.getElementById("felicidade").innerText = PersonagemSelecionado.felicidade;
    document.getElementById("fome").innerText = PersonagemSelecionado.fome;
    document.getElementById("saude").innerText = PersonagemSelecionado.saude;
    document.getElementById("inteligencia").innerText = PersonagemSelecionado.inteligencia;
    document.getElementById("energia").innerText = PersonagemSelecionado.energia;
    document.getElementById("descricao").innerText = PersonagemSelecionado.descricao;
    document.getElementById("foto").src = PersonagemSelecionado.imagem;
}

function selecionarPersonagem(Personagem) {
    telaP(Personagem);
    document.getElementById('telaP').style.display = 'none';
    document.getElementById('nomeg').style.display = 'block';
    PersonagemSelecionado = Personagem;
}

function selecionarGenero(genero) {
    document.getElementById('genero').innerText = genero;
}

function avancarParaJogo() {
    var nomeDoUsuario = document.getElementById('nomeG').value;
    if (nomeDoUsuario.trim() !== "") {
        document.getElementById('nomeUsuario').innerText = nomeDoUsuario;
        document.getElementById('nomeg').style.display = 'none';
        document.getElementById('telaJogo').style.display = 'block';
        document.getElementById('barraStatus').style.display = 'block';
        atualizarBarraStatus();
    } else {
        alert("Digite um nome válido!");
    }
}

function atualizarPerfil(Personagem) {

    document.getElementById("perfilVida").innerText = "Vida: " + Personagem.vida;
    document.getElementById("perfilEnergia").innerText = "Energia: " + Personagem.energia;
    document.getElementById("perfilFelicidade").innerText =  "Felicidade: " + Personagem.felicidade;
    document.getElementById("perfilFome").innerText = "Fome: " + Personagem.fome;
    document.getElementById("perfilSaude").innerText = "Saúde: " + Personagem.saude;
    document.getElementById("perfilInteligencia").innerText = "Inteligência: " + Personagem.inteligencia;
    document.getElementById("perfilDinheiro").innerText = "Dinheiro: " + Personagem.dinheiro;
    document.getElementById("perfilSaude").innerText = "Saude: " + Personagem.saude;

}
