
function atualizarBarraProgresso(barra, valor) 
{
  barra.value = valor;
}

// Definindo a estrutura do objeto para o personagem
function Personagem() 
{
  this.nome = "padrão";
  this.vida = 100; // Define a vida padrão
  this.alegria = 100; // Define a alegria padrão
  this.disposicao = 100; //define disposição
  this.fome = 100; //define fome
  this.foto = "foto.jpg";
}

let guerreira = new Personagem();
guerreira.nome = "Lontrinha guerreira";
guerreira.vida = 30;
guerreira.alegria = 80;
guerreira.disposicao = 100;
guerreira.fome = 50;
guerreira.imagem = 'assets/otterfighter.jpg';

let pescadora = new Personagem();
pescadora.nome = "Lontrinha pescadora";
pescadora.vida = 90;
pescadora.alegria = 75;
pescadora.disposicao = 10;
pescadora.fome = 10;
pescadora.imagem = 'assets/pascadora.jpg';

let chef = new Personagem();
chef.nome = "Chef lontrinha";
chef.vida = 10;
chef.alegria = 80;
chef.disposicao = 10;
chef.fome = 14;
chef.imagem = 'assets/otterchef.jpg';

let florista = new Personagem();
florista.nome = "Lontrinha florista";
florista.vida = 50;
florista.alegria = 70;
florista.disposicao = 75;
florista.fome = 50;
florista.imagem= 'assets/otterflores.jpg';

function selecionarPersonagem(nome) {
    switch (nome) {
        case 'guerreira':
            return guerreira;
        case 'pescadora':
            return pescadora;
        case 'chef':
            return chef;
        case 'florista':
            return florista;
        default:
            return null; // Retorna null se o nome do personagem não for encontrado
    }
}

function telainicio(personagem)
{
    document.getElementById("foto").src = personagem.imagem;
    document.getElementById("nome").innerHTML = personagem.nome;
            
    const barraV = document.getElementById('barraVida');
    barraV.style.display = 'block'; // Mostra a barra de progresso
    atualizarBarraProgresso(barraV, personagem.vida);
            
    const barraA = document.getElementById('barraAlegria');
    barraA.style.display = 'block';
    atualizarBarraProgresso(barraA, personagem.alegria);

    const barraD = document.getElementById('barraDispo');
    barraD.style.display = 'block';
    atualizarBarraProgresso(barraD, personagem.disposicao);

    const barraF = document.getElementById('barraFome');
    barraF.style.display = 'block';
    atualizarBarraProgresso(barraF, personagem.fome);    
            
}

function tituloJogo()
{
    document.getElementById("inicioJogo").style = "display:block";
}

function iniciar()
{
    document.getElementById("telaJogo").style = "display: block";
    document.getElementById("TelaPerso").style = "display: none";
}

function escolha(opcoes) 
{
    const opcoesDiv = document.getElementById('opcoes');
    const boxTexto = document.getElementById('boxTexto');
    switch (opcoes) 
    {
        case 'op':
            boxTexto.innerHTML = "<h1>O que deseja encontrar?</h1>";
            opcoesDiv.innerHTML = `
                <button class="opButton" onclick="escolha('op2')">Estou em busca de um tesouro perdido!</button>
                <button class="opButton" onclick="escolha('op3')">Não sei se devo contar.</button>
            `;
            break;
        case 'op2':
            boxTexto.innerHTML = "<h1>Você ganhou um ponto de alegria!!</h1>";
            opcoesDiv.innerHTML = `
                <button class="opButton1" onclick="escolha('op1')">Continuar</button>
            `;
            break;
        case 'op3':
            boxTexto.innerHTML = "<h1>Tem certeza?</h1>";
            opcoesDiv.innerHTML = `
                <button class="opButton1" onclick="escolha('op4')">Na verdade, estou em busca de um tesouro!<button>
                `;
            break;
        case 'op1':
            boxTexto.innerHTML = "<h1>Hoje é seu dia de sorte, está falando com o cara certo! </h1>"
            opcoesDiv.innerHTML = `
                <button class="opButton1" onclick="escolha('op5')"> Como assim? O que quer dizer? </button>
                `;
            break;
        case 'op5':
            boxTexto.innerHTML = "<h1>Eu sei tudo sobre esse lugar, tudo! Posso lhe dizer o caminho, porém...</h1>"
            opcoesDiv.innerHTML = `
                <button class="opButton" onclick="escolha('op6')"> Porém o que?? </button> 
                `;
            break;
        case 'op6':
            boxTexto.innerHTML = "<h1> Porém terá de provar que é digno! </h1>"
            opcoesDiv.innerHTML = `
                <button class="opButton" onclick="escolha('op7')"> Certo...O que tenho que fazer? </button>
                <button class="opButton" onclick="escolha('op8')"> Acho que é demais pra mim... </button>
                `;
            break;
        case 'op7':
            boxTexto.innerHTML = "<h1> Pequeno ser você terá que me trazer a magnífica, explêndida, grandiosa otterstone! </h1>"
            opcoesDiv.innerHTML = `
                <button class="opButton" onclick="escolha('op9')"> O que é isso? Como vou achar essa coisa? </button>
                `;
            break;
        case 'op8':
            boxTexto.innerHTML = "<h1> É algo perigoso, porém a recompensa é muito grande! </h1>"
            opcoesDiv.innerHTML = `
                <button class="opButton" onclick="escolha('op7')"> Certo...O que tenho que fazer? </button>
                `;
                break;
        case 'op9':
            boxTexto.innerHTML = "<h1> É o amuleto da nossa aldeia, se conseguir encontrar provará que é digno do tesouro! </h1>"
            opcoesDiv.innerHTML = `
                <button class="opButton" onclick="escolha('op7')"> Certo...O que tenho que fazer? </button>
                <button class="opButton" onclick="escolha('op7')"> Acho que é demais pra mim... </button>
                `;
                break;
        default:
            boxTexto.innerHTML = "<h1>...</h1>";
            opcoesDiv.innerHTML = `
                <button class="opButton1" onclick="escolha('op1')">Continuar</button>
            `;
            break;
    }
}



